import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/main/main-layout";
import { DoctorsPage } from "../../pages/doctors";
import { DoctorShow } from "../../features/doctors/components/show";
import { NursesPage } from "../../pages/nurses";
import { NurseShow } from "../../features/nurses/components/show";
import { PatientsPage } from "../../pages/patients";
import { PatientShow } from "../../features/patients/components/show";
import { RecipesPage } from "../../pages/recipes";
import { RecipeShow } from "../../features/recipes/components/show";
import { DashboardPage } from "../../pages/dashboard";
import { AuthLayout } from "../layouts/auth/auth-layout";
import { LoginPage } from "../../pages/auth/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/doctors",
        element: <DoctorsPage />,
      },
      {
        path: "/doctors/:id",
        element: <DoctorShow />,
      },
      {
        path: "/nurses",
        element: <NursesPage />,
      },
      {
        path: "/nurses/:id",
        element: <NurseShow />,
      },
      {
        path: "/patients",
        element: <PatientsPage />,
      },
      {
        path: "/patients/:id",
        element: <PatientShow />,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeShow />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
