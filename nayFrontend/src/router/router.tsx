
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import { PUBLIC_URL } from "../config/env";
import { ErrorsPage } from "../errors/Errorpage";
import { useAuth } from "../auth/useAuth";
import { PrivateRoutes } from "./private_router";
import { AuthPage } from "../auth/page/auth_router";
import { HeroUIProvider } from "@heroui/react";
import { ScrollToTop } from "../components/ScrollToTop";

export const Router = () => {

  const { currentUser } = useAuth();


  return <BrowserRouter basename={PUBLIC_URL}>
    <ScrollToTop />
    <HeroUIProvider >
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="auth/logout" element={<div>Log Out</div>} />
          <Route path="/*" element={<PrivateRoutes />} />
          <Route index element={<Navigate to="/init" />} />
          {/* Redirect to init after success login/registartion */}
          {currentUser ? <Route path="auth/*" element={<Navigate to="/init" />} />
            : <Route path="auth/*" element={<AuthPage />} />}
        </Route>
      </Routes>
    </HeroUIProvider>
  </BrowserRouter>;
};
