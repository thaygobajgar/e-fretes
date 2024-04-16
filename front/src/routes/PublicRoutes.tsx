import { useContext } from "react";
import { UserContext } from "../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = (): JSX.Element => {
  const { token } = useContext(UserContext);
  return token ? <Navigate to="/" /> : <Outlet />;
};
