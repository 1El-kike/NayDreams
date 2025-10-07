import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router/router.tsx'
import { AuthProvider } from './auth/useAuth.tsx'
import './i18n'
import 'flag-icons/css/flag-icons.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { setupAxios } from './auth/core/AuthHelpers.ts'
import axios from 'axios'

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
})



setupAxios(axios)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>,
)
