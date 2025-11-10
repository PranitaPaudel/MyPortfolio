import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@app/hooks/Layout";
import Homepage from "@home/Homepage";
import ResumePage from "@resume/ResumePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "resume", element: <ResumePage /> },
      ],
    },
  ],
  {
    basename: "/MyPortfolio",
  }
);

export const AppRouter = () => <RouterProvider router={router} />;
