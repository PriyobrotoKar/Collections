"use client";

import "../globals.css";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

export default function Auth() {

  const { status, data: session } = useSession();
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {status !== "authenticated" ? (
        <button onClick={() => signIn("google")} className="text-white hover:text-[#D9D9D9]">
          Click here to login with Google
        </button>
      ) : null}

      {status === "authenticated" ? (
        router.push("/explore")
      ) : null}
    </main>
  );
}