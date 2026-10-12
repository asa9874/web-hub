document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('myTable');

    const weeks = [
        '1주 (3월10일~3월16일)', '2주 (3월17일~3월23일)', '3주 (3월24일~3월30일)', '4주 (3월31일~4월6일)',
        '5주 (4월7일~4월13일)', '6주 (4월14일~4월20일)', '7주 (4월21일~4월27일)', '8주 (4월28일~5월4일)',
        '9주 (5월5일~5월11일)', '10주 (5월12일~5월18일)', '11주 (5월19일~5월25일)', '12주 (5월26일~6월1일)',
        '13주 (6월2일~6월8일)', '14주 (6월9일~6월15일)', '15주 (6월16일~6월22일)', '16주 (6월23일~6월29일)',
        '17주 (6월30일~7월6일)', '18주 (7월7일~7월13일)', '19주 (7월14일~7월20일)', '20주 (7월21일~7월27일)',
        '21주 (7월28일~8월3일)', '22주 (8월4일~8월10일)', '23주 (8월11일~8월17일)', '24주 (8월18일~8월24일)',
        '25주 (8월25일~8월31일)', '26주 (9월1일~9월7일)', '27주 (9월8일~9월14일)', '28주 (9월15일~9월21일)',
        '29주 (9월22일~9월28일)', '30주 (9월29일~10월5일)'
    ];

    // 리스트 생성
    const stringList = [
        ["SQL", "Python APi사용"],
        ["SQL", "Python API사용"],
        [],
        ["GithubPages 웹호스팅", "네트워크기초지식", "알고리즘시작"],
        ["자료구조 ", "정렬 알고리즘", "다이나믹프로그래밍", "그리디알고리즘", "백준문제풀이"],
        ["Graph", "DFS", "BFS", "Two-Point", "백준문제풀이"],
        ["Tree", "백준문제풀이"],
        ["Django ", "Union-Find", "LCS 알고리즘 "],
        ["Django ", "Java ", "SQLD 자격증 준비"],
        ["Django ", "Java ", "Python Steam Api","SQLD시험합격"],
        ["Django ", "Java ", "JavaScript ", "Python Discord Bot"],
        ["JavaScript "],
        ["JavaScript ", "HTML5 ", "CSS3 "],
        ["JavaScript ", "HTML5 ", "CSS3 ","Linux "],
        ["Linux ","Spring Boot ",  "Clean Code(책)", "보안의 기본 독서(책)"],
        ["Linux ","Spring Boot ", "보안 공부"],
        ["Linux ","Spring Boot ", "Kotlin "],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    // 리스트의 길이만큼 행(row)을 생성
    const numRows = stringList.length;

    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();

        // 첫 번째 셀: 주차 값
        const cell1 = row.insertCell();
        cell1.textContent = weeks[i];

        // 두 번째 셀부터: 리스트의 문자열 내용
        if (Array.isArray(stringList[i])) {
            for (let j = 0; j < 7; j++) {
                const cell = row.insertCell();
                cell.textContent = stringList[i][j];
            }
        } else {
            const cell = row.insertCell();
            cell.textContent = stringList[i];
        }
    }
});