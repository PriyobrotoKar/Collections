"use client";

import "../globals.css";

import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Auth() {

  const { status, data: session } = useSession();
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {status !== "authenticated" ? (
        <button onClick={() => signIn("google")} className="text-white hover:text-[#D9D9D9]">
          Click here to login with Google
        </button>
      ) : router.push("/explore") }
    </main>
  );
}