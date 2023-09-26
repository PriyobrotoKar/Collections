'use client'

import { useRouter } from "next/navigation";

export default function Main() {

    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <button onClick={() => router.push('/upload')} className="text-white hover:text-[#D9D9D9]">
                Start Showcasing
            </button>
        </main>
    )
}