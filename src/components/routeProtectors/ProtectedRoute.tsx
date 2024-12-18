import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  children: React.ReactNode;
}
export const ProdectedRoute = ({ children }: IProtectedRouteProps) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/LogIn" replace />;
  }

  return children;
};
