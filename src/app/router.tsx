import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ROUTES } from "@/shared/model/routes";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import("@/features/auth/register.page"),
      },
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/item-list/item-list.page"),
      },
      {
        path: "*",
        lazy: () => import("@/features/item-list/item-list.page"),
      },
    ],
  },
]);
