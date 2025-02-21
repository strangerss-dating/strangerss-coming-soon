import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { PrivacyPolicyComponent } from './pages/privacy-policy.component.tsx';
import { CookiePolicyComponent } from './pages/cookie-policy.component.tsx';
import { PageWrapperComponent } from './components/page-wrapper.component.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageWrapperComponent>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicyComponent />} />
          <Route path="/cookie" element={<CookiePolicyComponent />} />

          <Route path="/qr" element={<Navigate to={'/?utm_source=print&utm_medium=qr_code&utm_campaign=coming_soon&utm_id=0'}></Navigate>} />
        </Routes>
        
      </PageWrapperComponent>
    </BrowserRouter>
  </StrictMode>,
)
