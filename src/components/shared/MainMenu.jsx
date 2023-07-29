import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Github, TwitterIcon } from "lucide-react";
import NavMenu from "./NavMenu";
import { useSession, signIn, signOut } from "next-auth/react";

export default function MainMenu() {
  const { data } = useSession();
  console.log(data);
  return (
    <header className="bg-background  z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <h2 className="font-bold text-2xl">
          <Link href={"/"}>PCB-BD</Link>
        </h2>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <NavMenu />

            <ThemeToggle />
            {data?.user ? (
              <Button onClick={() => signOut()}>Logout</Button>
            ) : (
              <Button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/",
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
