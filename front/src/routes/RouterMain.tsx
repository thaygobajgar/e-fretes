import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { HomePage } from "../pages/HomePage";
import { Dashboard } from "../pages/DashBoard";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";

export const RouterMain = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/LOGIN" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
