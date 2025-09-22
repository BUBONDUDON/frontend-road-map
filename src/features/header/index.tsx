import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/kit/popover";
import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <div className="flex justify-end py-4 bg-purple-200">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="mr-4 cursor-pointer">Главное</Button>
        </PopoverTrigger>
        <PopoverContent className="m-4">
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link to={ROUTES.LOGIN}>login</Link>
            </Button>
            <Button asChild>
              <Link to={ROUTES.REGISTER}>register</Link>
            </Button>
            <p>Content</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
