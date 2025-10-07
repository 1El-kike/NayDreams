import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/login'
import { AuthLayout } from '../layout/AuthLayout'
import { ForgotPassword } from '../components/forgotPassword'

const AuthPage = () => (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route index element={<Login />} />
        </Route>
    </Routes>
)

export { AuthPage }