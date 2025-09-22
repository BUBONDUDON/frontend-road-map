import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ROUTES } from "@/shared/model/routes";
import { Providers } from "./providers";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page.tsx"),
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import("@/features/auth/register.page.tsx"),
      },
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/content/content.page"),
      },
      {
        path: "*",
        lazy: () => import("@/features/content/content.page"),
      },
    ],
  },
]);
