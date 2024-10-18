import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session) {
        router.push('/login');
    }

    return (
        <div>
            <h1>Welcome, {session?.user?.name}</h1>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
}