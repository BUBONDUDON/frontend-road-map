import { Button } from "@/shared/ui/kit/button";
import { Home, Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/theme-provider";
import { Input } from "@/shared/ui/kit/input";

export const AppHeader = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-center pt-4 z-50 sticky top-0">
      <div className="flex justify-between items-center w-12/24 h-20 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center cpace-x-4">
          <Button
            className="cursor-pointer bg-background-none hover:bg-input/30 rounded-full"
            variant="outline"
          >
            <Home />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Input placeholder="site search" className="m-4 w-auto rounded-full" />
          <Button
            className="cursor-pointer bg-background-none hover:bg-input/30 rounded-full"
            variant="outline"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </header>
  );
};
