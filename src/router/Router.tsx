import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/projects/:slug",
      element: <ProjectDetailPage />,
    },
  ],
  {
    basename: "/portfolio",
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}