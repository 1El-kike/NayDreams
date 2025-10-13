import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { ForgotPassword } from '../components/forgotPassword'
import { AuthCombinedPage } from './AuthCombinedPage'

const AuthPage = () => (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path='login' element={<AuthCombinedPage />} />
            <Route path='register' element={<AuthCombinedPage />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route index element={<AuthCombinedPage />} />
        </Route>
    </Routes>
)

export { AuthPage }