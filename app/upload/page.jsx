'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Upload() {
    const { status } = useSession();
    const router = useRouter();

    return (
        <main className='flex flex-col items-center justify-center h-screen'>
            {status === "authenticated" ? (
                <h1 className='text-white'>Upload</h1>
            ) : (
                <h1 className='text-white'>Oops, it seems like you are not signed in</h1>
            )} 
        </main>
    );
}