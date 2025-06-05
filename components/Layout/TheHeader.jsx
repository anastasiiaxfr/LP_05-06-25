import Link from "next/link";
import { Button } from "@/components/ui/button";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Drawer from "./Drawer";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <NavMenu />
        <nav className="nav_menu">
          <Link href="/">Resources</Link>
          <Link href="/">Login</Link>
        </nav>
        <div className="flex gap-2">
          <Button variant="secondary" className="btn">
            Open an account
          </Button>
          <div className="lg:hidden">
            <Drawer />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
