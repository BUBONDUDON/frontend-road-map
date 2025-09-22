import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/shared/ui/kit/hover-card";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/theme-provider";

export const AppHeader = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-center py-4">
      <div className="flex justify-end items-center w-23/24 h-20 bg-slate-950 rounded-full px-6 py-3 shadow-lg">
        <HoverCard openDelay={100}>
          <HoverCardTrigger asChild>
            <Button className="mr-4" variant="outline">
              AUTH
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="m-4 mt-6">
            <div className="flex flex-col gap-2">
              <Button asChild>
                <a href={ROUTES.LOGIN}>Login</a>
              </Button>
              <Button asChild>
                <a href={ROUTES.REGISTER}>Register</a>
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Button
        className="cursor-pointer"
          variant="outline"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </div>
  );
};
