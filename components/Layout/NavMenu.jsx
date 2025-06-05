import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { menu } from "./contstant";

function NavMenu() {
  return (
    <NavigationMenu className="menu_wrapper hidden lg:flex">
      <NavigationMenuList className="menu">
        {menu.map((i, ind) => (
          <NavigationMenuItem key={ind}>
            <Link href={i.url} className="">
              {i.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
