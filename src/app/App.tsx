import { AppFooter } from "@/features/footer";
import { AppHeader } from "@/features/header";
import { ROUTES } from "@/shared/model/routes";
import { Outlet, useLocation } from "react-router-dom";

export function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0) scale(1); }
            33% { transform: translateY(-30px) translateX(20px) scale(1.1); }
            66% { transform: translateY(20px) translateX(-15px) scale(0.9); }
          }
          .animate-float-slow { animation: float 20s ease-in-out infinite; }
          .animate-float-medium { animation: float 15s ease-in-out infinite; }
          .animate-float-fast { animation: float 10s ease-in-out infinite; }
        `}
      </style>

      <div className="min-h-screen flex flex-col relative ">
        {/* Основной градиент */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 dark:from-violet-950 dark:via-blue-950 dark:to-cyan-900" />

        {/* Анимированные фигуры */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-400 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-400 rounded-full animate-float-slow"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {!isAuthPage && <AppHeader />}
          <Outlet />
          <AppFooter />
        </div>
      </div>
    </>
  );
}
