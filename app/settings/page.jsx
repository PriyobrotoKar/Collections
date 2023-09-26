'use client'

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Settings() {

  const { status } = useSession();
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {status === "authenticated" ? (
        <button onClick={signOut} className='text-white hover:text-[#D9D9D9]'>Sign Out</button>
      ) : <h1 className='text-white'>Oops, it seems like you are not signed in</h1>}
    </main>
  );
}
