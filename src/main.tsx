import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qr" element={<Navigate to={'/?utm_source=print&utm_medium=qr_code&utm_campaign=coming_soon&utm_id=0'}></Navigate>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
