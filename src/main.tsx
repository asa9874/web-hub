import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AIPrompts from './AIPrompts/AIPrompts.tsx'
import NetworkQuiz from './NetworkQuiz/NetworkQuiz.tsx'
import NeonSpace from './NeonSpace/NeonSpace.tsx'
import PixelSortVisualizer from './PixelSortVisualizer/PixelSortVisualizer.tsx'
import CthulhuPage from './CthulhuPage/CthulhuPage.tsx'
import SpeedClickerDuel from './SpeedClickerDuel/SpeedClickerDuel.tsx'
import Scedule from './Scedule/Scedule.tsx'
import VisualNovel from './VisualNovel/VisualNovel.tsx'
import HeroinInfo from './VisualNovel/HeroinInfo.tsx'
import Japan from './Japan/Japan.tsx'
import English from './English/English.tsx'
import SuperHotDesign from './SuperHotDesign/SuperHotDesign.tsx'
const NeonTrader = lazy(() => import('./NeonTrader/NeonTrader.tsx'));
const AcademySurvival = lazy(() => import('./AcademySurvival/AcademySurvival.tsx'));
const ForgottenWitch = lazy(() => import('./ForgottenWitch/ForgottenWitch.tsx'));

// Preserve bookmarked HashRouter URLs while giving every page a shareable pathname.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', import.meta.env.BASE_URL + window.location.hash.slice(2));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/games/academy-survival" element={<Suspense fallback={<p>입학 기록실을 열고 있습니다…</p>}><AcademySurvival /></Suspense>} />
        <Route path="/games/neon-trader" element={<Suspense fallback={<p>거래소를 준비하고 있습니다…</p>}><NeonTrader /></Suspense>} />
        <Route path="/games/forgotten-witch" element={<Suspense fallback={<p>극장을 준비하고 있습니다…</p>}><ForgottenWitch /></Suspense>} />
        <Route path="/ai-prompts" element={<AIPrompts />} />
        <Route path="/network-quiz" element={<NetworkQuiz />} />
        <Route path="/neonspace" element={<NeonSpace />} />
        <Route path="/pixel-sort" element={<PixelSortVisualizer />} />
        <Route path="/cthulhu" element={<CthulhuPage />} />
        <Route path="/speed-clicker" element={<SpeedClickerDuel />} />
        <Route path="/schedule" element={<Scedule />} />
        <Route path="/visual-novel" element={<VisualNovel />} />
        <Route path="/heroin-info" element={<HeroinInfo />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/english" element={<English />} />
        <Route path="/mga/*" element={<SuperHotDesign />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
