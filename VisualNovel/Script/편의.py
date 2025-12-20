import json
import re
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs
import webbrowser
import threading

class ScriptCreatorHandler(BaseHTTPRequestHandler):
    script_dir = Path(__file__).parent
    
    def do_GET(self):
        """HTML 페이지 제공"""
        self.send_response(200)
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()
        
        html = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>비주얼 노벨 스크립트 생성기</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: '맑은 고딕', sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            padding: 30px;
        }
        h1 {
            color: #667eea;
            text-align: center;
            margin-bottom: 30px;
            font-size: 28px;
        }
        textarea {
            width: 100%;
            height: 500px;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-family: 'Consolas', monospace;
            font-size: 13px;
            resize: vertical;
            transition: border-color 0.3s;
        }
        textarea:focus {
            outline: none;
            border-color: #667eea;
        }
        .button-group {
            display: flex;
            gap: 10px;
            margin-top: 20px;
            justify-content: center;
        }
        button {
            padding: 15px 30px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
            color: white;
        }
        .submit-btn {
            background: linear-gradient(135deg, #4CAF50, #45a049);
        }
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
        }
        .clear-btn {
            background: linear-gradient(135deg, #f44336, #da190b);
        }
        .clear-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(244, 67, 54, 0.4);
        }
        #message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            display: none;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .info {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 비주얼 노벨 스크립트 생성기</h1>
        <textarea id="jsonInput" placeholder="JSON 스크립트를 여기에 입력하세요..."></textarea>
        <div class="button-group">
            <button class="submit-btn" onclick="submitScript()">제출 및 파일 생성</button>
            <button class="clear-btn" onclick="clearInput()">내용 지우기</button>
        </div>
        <div id="message"></div>
    </div>
    
    <script>
        function clearInput() {
            document.getElementById('jsonInput').value = '';
            hideMessage();
        }
        
        function showMessage(msg, type) {
            const msgDiv = document.getElementById('message');
            msgDiv.textContent = msg;
            msgDiv.className = type;
            msgDiv.style.display = 'block';
        }
        
        function hideMessage() {
            document.getElementById('message').style.display = 'none';
        }
        
        async function submitScript() {
            const input = document.getElementById('jsonInput').value.trim();
            
            if (!input) {
                showMessage('⚠️ 입력된 내용이 없습니다.', 'error');
                return;
            }
            
            try {
                showMessage('⏳ 처리 중...', 'info');
                
                const response = await fetch('/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'json_data=' + encodeURIComponent(input)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showMessage('✅ ' + result.message, 'success');
                    clearInput();
                } else {
                    showMessage('❌ ' + result.message, 'error');
                }
            } catch (error) {
                showMessage('❌ 오류: ' + error.message, 'error');
            }
        }
    </script>
</body>
</html>
        """
        
        self.wfile.write(html.encode('utf-8'))
    
    def do_POST(self):
        """POST 요청 처리"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        params = parse_qs(post_data)
        
        json_data = params.get('json_data', [''])[0]
        
        result = self.process_script(json_data)
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(json.dumps(result, ensure_ascii=False).encode('utf-8'))
    
    def process_script(self, json_text):
        """스크립트 처리"""
        try:
            # 대괄호 패턴 제거
            cleaned_text = re.sub(r'\[.*?\]', '', json_text)
            
            # JSON 파싱
            try:
                data = json.loads(cleaned_text)
            except json.JSONDecodeError as e:
                return {"success": False, "message": f"JSON 형식 오류: {str(e)}"}
            
            # 필수 필드 확인
            if 'sceneId' not in data:
                return {"success": False, "message": "sceneId 필드가 필요합니다."}
            
            if 'chapter' not in data:
                return {"success": False, "message": "chapter 필드가 필요합니다."}
            
            scene_id = data['sceneId']
            chapter = data['chapter']
            
            # Chapter 디렉토리 경로
            chapter_dir = self.script_dir / f'Chapter{chapter}'
            chapter_dir.mkdir(exist_ok=True)
            
            # 파일 경로
            file_path = chapter_dir / f'{scene_id}.json'
            
            # JSON 파일 저장
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            # 리소스 추출
            sounds, images = self.extract_resources(data)
            
            # 리소스 파일 업데이트
            sound_count, image_count = self.update_resource_files(sounds, images)
            
            # 성공 메시지
            message = f"파일 생성 완료!\n"
            message += f"경로: {file_path.name}\n"
            message += f"챕터: Chapter{chapter}\n"
            message += f"필요사운드: {sound_count}개 (새로 추가: {len(sounds)}개)\n"
            message += f"필요이미지: {image_count}개 (새로 추가: {len(images)}개)"
            
            return {"success": True, "message": message}
            
        except Exception as e:
            return {"success": False, "message": f"처리 중 오류: {str(e)}"}
    
    def extract_resources(self, data):
        """JSON에서 리소스 추출"""
        sounds = set()
        images = set()
        
        if 'lines' in data:
            for line in data['lines']:
                # 사운드 추출
                if 'music' in line and line['music'] and line['music'] != 'none':
                    sounds.add(line['music'])
                if 'effectSound' in line and line['effectSound']:
                    sounds.add(line['effectSound'])
                
                # 이미지 추출
                if 'background' in line and line['background']:
                    images.add(line['background'])
                if 'characterImage' in line and line['characterImage']:
                    images.add(line['characterImage'])
        
        return sounds, images
    
    def update_resource_files(self, sounds, images):
        """필요사운드.txt와 필요이미지.txt 업데이트"""
        # 필요사운드.txt 업데이트
        sound_file = self.script_dir / '필요사운드.txt'
        existing_sounds = set()
        
        if sound_file.exists():
            with open(sound_file, 'r', encoding='utf-8') as f:
                existing_sounds = set(line.strip() for line in f if line.strip())
        
        all_sounds = existing_sounds | sounds
        
        with open(sound_file, 'w', encoding='utf-8') as f:
            for sound in sorted(all_sounds):
                f.write(sound + '\n')
        
        # 필요이미지.txt 업데이트
        image_file = self.script_dir / '필요이미지.txt'
        existing_images = set()
        
        if image_file.exists():
            with open(image_file, 'r', encoding='utf-8') as f:
                existing_images = set(line.strip() for line in f if line.strip())
        
        all_images = existing_images | images
        
        with open(image_file, 'w', encoding='utf-8') as f:
            for image in sorted(all_images):
                f.write(image + '\n')
        
        return len(all_sounds), len(all_images)
    
    def log_message(self, format, *args):
        """로그 메시지 출력 (간소화)"""
        pass

def open_browser():
    """브라우저 자동 열기"""
    webbrowser.open('http://localhost:8000')

def main():
    port = 8000
    server = HTTPServer(('localhost', port), ScriptCreatorHandler)
    
    print("=" * 60)
    print("🚀 비주얼 노벨 스크립트 생성기 서버 시작!")
    print("=" * 60)
    print(f"\n📍 서버 주소: http://localhost:{port}")
    print("\n💡 브라우저가 자동으로 열립니다.")
    print("   열리지 않으면 위 주소를 브라우저에 직접 입력하세요.\n")
    print("⚠️  종료하려면 Ctrl+C 를 누르세요.\n")
    print("=" * 60)
    
    # 1초 후 브라우저 열기
    threading.Timer(1.0, open_browser).start()
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n\n서버를 종료합니다...")
        server.shutdown()

if __name__ == "__main__":
    main()
