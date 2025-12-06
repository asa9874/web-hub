import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Move, Info, MousePointer2 } from 'lucide-react';

const NeonSpace: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.0015);
    scene.background = new THREE.Color(0x050510);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      3000 // 카메라 시야 거리를 늘려 거대 물체가 잘 보이도록 함
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- 2. Objects Creation ---

    // 네온 컬러 팔레트
    const colors = [
      0x00ffff, // Cyan
      0xff00ff, // Magenta
      0xffff00, // Yellow
      0x00ff00, // Lime
      0xff3333, // Red-Orange
      0x3333ff  // Blue
    ];

    // [GROUP A] 빠른 속도감을 주는 작은 큐브들
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);
    const cubes: THREE.LineSegments[] = [];
    const numCubes = 400;

    for (let i = 0; i < numCubes; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.LineBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.8,
        linewidth: 2 
      });
      
      const cube = new THREE.LineSegments(edgesGeometry, material);

      cube.position.x = (Math.random() - 0.5) * 120;
      cube.position.y = (Math.random() - 0.5) * 120;
      cube.position.z = (Math.random() - 0.5) * 1000 - 500;

      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 2 + 0.5;
      cube.scale.set(scale, scale, scale);

      cube.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02
        },
        speedZ: Math.random() * 2 + 0.5
      };

      scene.add(cube);
      cubes.push(cube);
    }

    // [GROUP B] 우주적 스케일을 위한 거대 구체들 (Giant Spheres)
    // IcosahedronGeometry를 사용하여 기하학적인 구체 표현
    const sphereGeometry = new THREE.IcosahedronGeometry(1, 2); 
    const wireframeGeometry = new THREE.WireframeGeometry(sphereGeometry);
    const giantSpheres: THREE.LineSegments[] = [];
    const numGiantSpheres = 15;

    for (let i = 0; i < numGiantSpheres; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        // 거대 물체는 은은하게 배경에 깔리도록 투명도를 낮춤
        const material = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.15, 
            linewidth: 1
        });

        const sphere = new THREE.LineSegments(wireframeGeometry, material);

        // 훨씬 넓은 범위에 배치
        sphere.position.x = (Math.random() - 0.5) * 600;
        sphere.position.y = (Math.random() - 0.5) * 600;
        sphere.position.z = (Math.random() - 0.5) * 2000 - 800;

        // 압도적인 크기 (스케일 30 ~ 80)
        const scale = Math.random() * 50 + 30;
        sphere.scale.set(scale, scale, scale);

        sphere.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.002, // 거대하므로 천천히 회전
                y: (Math.random() - 0.5) * 0.002
            },
            speedZ: Math.random() * 0.5 + 0.1 // 거대하므로 천천히 이동 (Parallax 효과)
        };

        scene.add(sphere);
        giantSpheres.push(sphere);
    }

    // [GROUP C] 별 배경
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 4000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2500;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, transparent: true, opacity: 0.6 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);


    // --- 3. Interaction ---
    let isUserInteracting = false;
    let onPointerDownPointerX = 0;
    let onPointerDownPointerY = 0;
    let lon = 0;
    let onPointerDownLon = 0;
    let lat = 0;
    let onPointerDownLat = 0;
    let phi = 0;
    let theta = 0;

    const onPointerDown = (event: MouseEvent) => {
      isUserInteracting = true;
      setIsDragging(true);
      onPointerDownPointerX = event.clientX;
      onPointerDownPointerY = event.clientY;
      onPointerDownLon = lon;
      onPointerDownLat = lat;
    };

    const onPointerMove = (event: MouseEvent) => {
      if (isUserInteracting === true) {
        lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
      }
    };

    const onPointerUp = () => {
      isUserInteracting = false;
      setIsDragging(false);
    };

    const domElement = mountRef.current;
    domElement.addEventListener('mousedown', onPointerDown);
    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('mouseup', onPointerUp);
    domElement.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        onPointerDown({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent);
    });
    domElement.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        onPointerMove({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent);
    });
    domElement.addEventListener('touchend', onPointerUp);


    // --- 4. Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);

      lat = Math.max(-85, Math.min(85, lat));
      phi = THREE.MathUtils.degToRad(90 - lat);
      theta = THREE.MathUtils.degToRad(lon);

      const target = new THREE.Vector3();
      target.x = 500 * Math.sin(phi) * Math.cos(theta);
      target.y = 500 * Math.cos(phi);
      target.z = 500 * Math.sin(phi) * Math.sin(theta);
      camera.lookAt(target);

      // 1. 작은 큐브 애니메이션
      cubes.forEach((cube) => {
        cube.position.z += cube.userData.speedZ;
        cube.rotation.x += cube.userData.rotationSpeed.x;
        cube.rotation.y += cube.userData.rotationSpeed.y;

        if (cube.position.z > 200) {
          cube.position.z = -800;
          cube.position.x = (Math.random() - 0.5) * 120;
          cube.position.y = (Math.random() - 0.5) * 120;
        }
      });

      // 2. 거대 구체 애니메이션
      giantSpheres.forEach((sphere) => {
          sphere.position.z += sphere.userData.speedZ; // 천천히 이동
          sphere.rotation.x += sphere.userData.rotationSpeed.x;
          sphere.rotation.y += sphere.userData.rotationSpeed.y;

          // 구체는 더 멀리서 리셋
          if (sphere.position.z > 600) {
              sphere.position.z = -1800;
              sphere.position.x = (Math.random() - 0.5) * 600;
              sphere.position.y = (Math.random() - 0.5) * 600;
          }
      });

      // 3. 별 배경 회전
      stars.rotation.z += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (domElement) {
        domElement.removeEventListener('mousedown', onPointerDown);
        while (domElement.firstChild) {
          domElement.removeChild(domElement.firstChild);
        }
      }
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseup', onPointerUp);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      <div ref={mountRef} className="w-full h-full cursor-move" />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8">
        
        <div className="flex justify-between items-start">
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-fade-in-down">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-tighter mb-2 drop-shadow-lg">
              NEON COSMOS
            </h1>
            <p className="text-blue-200 text-sm font-light tracking-widest uppercase opacity-80">
              Giant Structure Simulation
            </p>
          </div>
        </div>

        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${isDragging ? 'opacity-0' : 'opacity-60'}`}>
          <div className="flex flex-col items-center justify-center text-white/50">
             <MousePointer2 className="w-8 h-8 mb-2 animate-bounce" />
             <span className="text-xs tracking-[0.2em] uppercase">Drag to Explore</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5">
             <div className="flex items-center gap-3 text-cyan-300 mb-1">
                <Move className="w-4 h-4" />
                <span className="text-xs font-bold">CONTROLS</span>
             </div>
             <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                마우스를 클릭하고 드래그하여<br/>
                광활한 우주를 탐험하세요.
             </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-right">
             <div className="flex items-center justify-end gap-2 text-pink-400 mb-1">
                <Info className="w-4 h-4" />
                <span className="text-xs font-bold">SYSTEM</span>
             </div>
             <div className="space-y-1">
                <div className="flex items-center justify-end gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-gray-400 text-xs">Simulation Running</span>
                </div>
                <div className="text-gray-500 text-[10px] font-mono">
                    ENTITIES: 400 CUBES<br/>
                    STRUCTURES: 15 GIANTS
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NeonSpace;