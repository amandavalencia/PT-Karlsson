import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MyPrograms } from "./pages/myPrograms";

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
        element: <About/>
      },
      {
        path: "/MyPrograms",
        element: <MyPrograms/>
      },
    ],
  },
]);
