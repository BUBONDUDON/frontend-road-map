import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/shared/ui/kit/hover-card";

export const AppHeader = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="flex justify-end items-center w-11/12 bg-slate-950 rounded-full px-6 py-3 shadow-lg">
        <HoverCard openDelay={100}>
          <HoverCardTrigger asChild>
            <Button className="mr-4" variant="outline">AUTH</Button>
          </HoverCardTrigger>
          <HoverCardContent className="m-4">
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
      </div>
    </div>
  )
}

