import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { ForgotPassword } from '../components/forgotPassword'
import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage'

const AuthPage = () => (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route index element={<LoginPage />} />
        </Route>
    </Routes>
)

export { AuthPage }