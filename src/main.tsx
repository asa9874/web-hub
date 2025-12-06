import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NetworkQuiz from './NetworkQuiz/NetworkQuiz.tsx'
import NeonSpace from './NeonSpace/NeonSpace.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/network-quiz" element={<NetworkQuiz />} />
        <Route path="/neonspace" element={<NeonSpace />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
