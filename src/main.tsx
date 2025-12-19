import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NetworkQuiz from './NetworkQuiz/NetworkQuiz.tsx'
import NeonSpace from './NeonSpace/NeonSpace.tsx'
import PixelSortVisualizer from './PixelSortVisualizer/PixelSortVisualizer.tsx'
import CthulhuPage from './CthulhuPage/CthulhuPage.tsx'
import SpeedClickerDuel from './SpeedClickerDuel/SpeedClickerDuel.tsx'
import Scedule from './Scedule/Scedule.tsx'
import VisualNovel from './VisualNovel/VisualNovel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/network-quiz" element={<NetworkQuiz />} />
        <Route path="/neonspace" element={<NeonSpace />} />
        <Route path="/pixel-sort" element={<PixelSortVisualizer />} />
        <Route path="/cthulhu" element={<CthulhuPage />} />
        <Route path="/speed-clicker" element={<SpeedClickerDuel />} />
        <Route path="/schedule" element={<Scedule />} />
        <Route path="/visual-novel" element={<VisualNovel />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
