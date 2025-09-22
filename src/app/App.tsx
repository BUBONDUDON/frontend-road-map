import { AppHeader } from "@/features/header";
import { ROUTES } from "@/shared/model/routes";
import { Outlet, useLocation } from "react-router-dom";

export function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;

  return (
    <div
      className="
    min-h-screen
    flex flex-col 
    bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 
    dark:bg-gradient-to-br dark:from-violet-950 dark:via-blue-950 dark:to-cyan-900"
    >
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}
