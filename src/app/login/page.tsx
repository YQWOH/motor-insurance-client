"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (session) {
        router.push("/users");
        return null;
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <button
                onClick={() => signIn("google")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
            >
                Login with Google
            </button>
        </div>
    );
}
