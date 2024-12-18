import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  children: React.ReactNode;
}

export const AdminRoute = ({ children }: IProtectedRouteProps) => {
  const { user } = useContext(AuthContext);

  if (user === null) return null;
  if (!user) {
    return <Navigate to="/LogIn" replace />;
  }

  if (user.is_admin !== true) {
    return <Navigate to="/" replace />;
  }

  return children;
};
