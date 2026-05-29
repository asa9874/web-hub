import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App.tsx';

// StrictMode는 레거시 초기화 코드(initMap 등)가 완전히 React로 교체된
// Phase 9 이후에 추가한다.
createRoot(document.getElementById('app')!).render(<App />);
