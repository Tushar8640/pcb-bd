import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Github, TwitterIcon } from "lucide-react";
import NavMenu from "./NavMenu";

export default function MainMenu() {
  return (
    <header className="bg-background  z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <h2 className="font-bold text-2xl"><Link href={"/"}>PCB-BD</Link></h2>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <NavMenu />
            <Link href={"/"}>
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Github />
              </div>
            </Link>
            <Link href={"/"}>
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <TwitterIcon />
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
