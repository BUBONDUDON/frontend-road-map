import { Button } from "@/shared/ui/kit/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/kit/popover";

export const AppHeader = () => {
  return (
    <div className="flex justify-end py-4 bg-purple-200">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="mr-4 cursor-pointer">Главное</Button>
        </PopoverTrigger>
        <PopoverContent className="mr-4">
          <div className="flex flex-col">
            <Button className="m-2">Услуги</Button>
            <Button className="m-2">Портфолио</Button>
            <Button className="m-2">Контакты</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
