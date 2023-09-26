"use client";

import { useSession } from 'next-auth/react';
import "../globals.css";
import { signIn } from "next-auth/react";

export default function Auth() {

  const { status, data: session } = useSession();

  return (
    <main>

      <h1>
        sign in and start showcasing!
      </h1>
      <p>
        Collections.bio respects your privacy and does not use your account data
        anywhere. We only use your Google account’s icon for personalization.
      </p>
      <button onClick={() => signIn("google")}>
        Click here to login with google
      </button>

      {status === "authenticated" ? (
        console.log("Successfully Authenticated:\n" + "Name: " + session?.user?.name + "\n" +  "Email: " + session?.user?.email)
      ) : null}

    </main>
  );
}
