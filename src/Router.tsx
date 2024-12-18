import { createBrowserRouter } from "react-router-dom";

import { TrainingProgram } from "./pages/TrainingProgram";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { MyPage } from "./pages/MyPage";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { ProdectedRoute } from "./components/routeProtectors/ProtectedRoute";
import { AdminPage } from "./pages/AdminPage";
import { NotFound } from "./pages/NotFound";
import { AdminRoute } from "./components/routeProtectors/AdminRoute";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/", element: <About></About> },
      {
        path: "/MyPage",
        element: (
          <ProdectedRoute>
            <MyPage />
          </ProdectedRoute>
        ),
      },
      {
        path: "/TrainingProgram/:level",
        element: <TrainingProgram />,
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/AdminPage",
        element: (
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);
