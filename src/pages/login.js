import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);
  return (
    <div className="grid gap-6 place-items-center h-full md:mt-52 mt-10">
      <div className="grid gap-2">
        <div className="grid gap-1"></div>
        <Button
          onClick={() =>
            signIn("github", {
              callbackUrl: process.env.NEXTAUTH_URL,
            })
          }
        >
          <Github /> Login with Github
        </Button>
      </div>
    </div>
  );
}
