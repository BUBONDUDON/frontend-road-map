import { Button } from "@/shared/ui/kit/button";

export const AppFooter = () => {
  return (
    <footer className="flex flex-col h-24 w-full items-center justify-center border-t">
      <p className="text-muted-foreground text-sm leading-tight ">
        Designed by{" "}
        <Button
          asChild
          variant="link"
          className="text-muted-foreground text-sm leading-tight p-0"
        >
          <a href="https://t.me/BDTRPROD">@bdtrprod</a>
        </Button>
      </p>
      <p className="text-muted-foreground text-sm leading-tight ">
        Distributed under the{" "}
        <Button
          asChild
          variant="link"
          className="text-muted-foreground text-sm leading-tight p-0"
        >
          <a href="https://kidgaro.ru">@kidgaro</a>
        </Button>{" "}
        License
      </p>
    </footer>
  );
};
