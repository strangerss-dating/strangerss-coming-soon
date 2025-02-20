import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { initializeApp } from "firebase/app";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY7We06bGfqT2T3mOWDYFU2N_BPsBW6SY",
  authDomain: "strangerss-coming-soon.firebaseapp.com",
  projectId: "strangerss-coming-soon",
  storageBucket: "strangerss-coming-soon.firebasestorage.app",
  messagingSenderId: "991336639315",
  appId: "1:991336639315:web:f3e25a395132b8a7788fa6",
  measurementId: "G-JFZT1JDZ9V"
};
initializeApp(firebaseConfig);

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
