"use client";

import { useSession } from 'next-auth/react';
import "../globals.css";
import { signIn } from "next-auth/react";

export default function Auth() {

  const { status, data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <button onClick={() => signIn("google")} className="text-white hover:text-[#D9D9D9]">
        Click here to login with Google
      </button>

      {status === "authenticated" ? (
        console.log(
          "Successfully Authenticated:\n" +
          "Name: " +
          session?.user?.name +
          "\n" +
          "Email: " +
          session?.user?.email
        )
      ) : null}
    </main>

  );
}
