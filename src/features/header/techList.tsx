import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/kit/navigation-menu";
import { Link } from "react-router-dom";
import { TECH_LIST } from "./tech.list";

export function TechList() {
  return (
    <NavigationMenu viewport={false} className="mr-auto">
      <NavigationMenuList>
        {TECH_LIST.map(({ name, icon, description, sections }) => (
          <NavigationMenuItem key={name}>
            <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className="grid gap-2  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]
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
                        {description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title={sections[0].title}>
                  {sections[0].text}
                </ListItem>
                <ListItem href="/docs/installation" title={sections[1].title}>
                  {sections[1].text}
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title={sections[2].title}
                >
                  {sections[2].text}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="m-1">
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
