import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Github, LogIn, Menu, TwitterIcon } from "lucide-react";
import NavMenu from "./NavMenu";
import { useSession, signIn, signOut } from "next-auth/react";
import { BASE_URL } from "@/config/url";
import {
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function MainMenu() {
  const categories = [
    "cpu",
    "motherboard",
    "ram",
    "storage",
    "monitor",
    "powersupply",
    "others",
  ];
  const { data } = useSession();
  return (
    <header className="bg-background  z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <h2 className="font-bold sm:text-xl md:text-2xl">
          <Link href={"/"}>PCB-BD</Link>
        </h2>

        {/* mobile nav  */}

        <div className="flex flex-1 items-center justify-end space-x-4 md:visible">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Category</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {categories?.map((category, i) => (
                        <DropdownMenuItem key={i}>
                          <Link
                            href={{
                              pathname: `/category/${category}`,
                            }}
                            className={
                              "block capitalize select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            }
                          >
                            {category}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuSeparator />
              {data?.user ? (
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: `${BASE_URL}`,
                    })
                  }
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Login</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* md to larg screen nav  */}
        <div className="md:flex md:flex-1 items-center justify-end space-x-4 md:visible hidden">
          <nav className="flex items-center space-x-1">
            <NavMenu />

            <ThemeToggle />
            {data?.user ? (
              <Button onClick={() => signOut()}>Logout</Button>
            ) : (
              <Button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: `${BASE_URL}`,
                  })
                }
              >
                Login
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
