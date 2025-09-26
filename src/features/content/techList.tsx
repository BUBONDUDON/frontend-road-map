import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/kit/navigation-menu";
import { TECH_LIST } from "./tech.list";

export function TechList() {
  return (
    <NavigationMenu viewport={false} className="absolute">
      <NavigationMenuList className="grid grid-cols-3 grid-rows-5 gap-0">
        {TECH_LIST.map(({ name }, index) => {
          const { col, row, offset } = GRID_POSITIONS[index];
          return (
            <NavigationMenuItem
              key={name}
              className={`list-none flex justify-center ${offset}`}
              style={{ gridColumn: col, gridRow: row }}
            >
              <NavigationMenuTrigger
                className="
            w-16 h-16 md:w-36 md:h-36 
            transform rotate-45
            bg-white
            transition-all duration-200
            hover:scale-105 hover:drop-shadow-[6px_6px_0_rgba(0,0,0,1)]
            flex items-center justify-center
            rounded-3xl
            [&>svg]:hidden [&_[data-chevron]]:hidden [&_.chevron]:hidden"
              >
                <div className="transform -rotate-45 text-lg font-bold dark:text-black">
                  {name}
                </div>
              </NavigationMenuTrigger>
              {/*<NavigationMenuContent className="z-50 max-w-[90vw]">
                <ul
                  className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]
                    bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 
                    dark:bg-gradient-to-br dark:from-violet-950 dark:via-blue-950 dark:to-cyan-900"
                >
                  <li className="row-span-3 flex">
                    <NavigationMenuLink asChild>
                      <a
                        className="m-1 flex flex-col justify-end rounded-md bg-linear-to-b p-6"
                        href="/"
                      >
                        <img src={icon} alt={name} />
                        <div className="mt-4 mb-2 text-lg font-medium">
                          {name}
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {TECH_LIST.find((t) => t.name === name)?.description}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/docs"
                    title={
                      TECH_LIST.find((t) => t.name === name)?.sections[0].title
                    }
                  >
                    {TECH_LIST.find((t) => t.name === name)?.sections[0].text}
                  </ListItem>
                  <ListItem
                    href="/docs/installation"
                    title={
                      TECH_LIST.find((t) => t.name === name)?.sections[1].title
                    }
                  >
                    {TECH_LIST.find((t) => t.name === name)?.sections[1].text}
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title={
                      TECH_LIST.find((t) => t.name === name)?.sections[2].title
                    }
                  >
                    {TECH_LIST.find((t) => t.name === name)?.sections[2].text}
                  </ListItem>
                </ul>
              </NavigationMenuContent>*/}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
const GRID_POSITIONS = [
  { col: 2, row: 1, offset: "" },
  { col: 1, row: 2, offset: "-mt-14 -mr-14" },
  { col: 3, row: 2, offset: "-mt-14 -ml-14" },
  { col: 2, row: 3, offset: "-mt-28" },
  { col: 1, row: 4, offset: "-mt-42 -mr-14" },
  { col: 3, row: 4, offset: "-mt-42 -ml-14" },
  { col: 2, row: 5, offset: "-mt-56" },
];

//function ListItem({
//  title,
//  children,
//  href,
//  ...props
//}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//  return (
//    <li {...props}>
//      <NavigationMenuLink asChild className="m-1">
//        <Link to={href}>
//          <div className="text-sm leading-none font-medium">{title}</div>
//          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//            {children}
//          </p>
//        </Link>
//      </NavigationMenuLink>
//    </li>
//  );
//}
