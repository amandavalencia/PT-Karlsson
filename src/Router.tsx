import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MyPage } from "./pages/MyPage";
import { LogIn } from "./pages/LogIn";
import { TrainingPrograms } from "./pages/TrainingPrograms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/MyPage",
        element: <MyPage />,
      },
      {
        path: "/TrainingPrograms",
        element: <TrainingPrograms />,
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
    ],
  },
]);
