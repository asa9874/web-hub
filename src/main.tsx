import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NetworkQuiz from './NetworkQuiz/NetworkQuiz.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/web-hub" element={<App />} />
        <Route path="/web-hub/network-quiz" element={<NetworkQuiz />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
