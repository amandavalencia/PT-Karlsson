import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";
import { Loader } from "../Loader";

interface IProtectedRouteProps {
  children: React.ReactNode;
}
export const ProdectedRoute = ({ children }: IProtectedRouteProps) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/LogIn" replace />;
  }

  return children;
};
