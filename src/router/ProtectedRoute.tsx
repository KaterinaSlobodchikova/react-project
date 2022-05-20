import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  pathToRedirect: string;
  isAllow: boolean;
  children?: JSX.Element;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
  const { pathToRedirect, isAllow, children } = props;
  const location = useLocation();

  if (!isAllow) {
    return <Navigate to={pathToRedirect} state={location} />;
  }

  return children ? children : <Outlet />;
};
