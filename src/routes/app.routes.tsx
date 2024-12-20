import { Navigate, RouteObject } from "react-router-dom";
import { Paths } from "./path.routes";
import DashboardLayout from "../components/layouts/dashboard/dashboard-layout";
import CharacterPage from "../pages/character/character";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <DashboardLayout />,
    children: [
      {
        path: Paths.HOME,
        element: <Navigate to={Paths.HOME} />,
      },
      {
        path: Paths.CHARACTER,
        element: <CharacterPage />,
      },
    ],
  },
];
