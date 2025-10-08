
import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { AuthInit } from './auth/useAuth'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <ToastProvider placement="top-right" />
        <AuthInit>
          <Outlet />
          {/* <MasterInit /> */}
        </AuthInit>
      </HeroUIProvider>
    </QueryClientProvider>
  )
}

export default App
