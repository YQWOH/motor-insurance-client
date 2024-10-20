"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleEmailVisibility } from '../../features/userSlice';
import { RootState } from '@/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";


interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

export default function Users() {
    const { data: session, status } = useSession();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();
    const visibleEmailUserIds = useSelector((state: RootState) => state.user.visibleEmailUserIds);

    const router = useRouter();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let allUsers: User[] = [];
                let page = 1;
                let response;

                do {
                    response = await axios.get(`https://reqres.in/api/users?page=${page}`);
                    allUsers = [...allUsers, ...response.data.data];
                    page += 1;
                } while (response.data.total_pages >= page);

                const filteredUsers = allUsers.filter(
                    (user) =>
                        user.first_name.startsWith('G') || user.last_name.startsWith('W')
                );
                setUsers(filteredUsers);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        return <p>You must be logged in to view this page</p>;
    }

    if (loading) return <p>Loading users...</p>;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-8">
                <h1 className="text-2xl font-bold mb-6">Users List</h1>
                <ul className="space-y-6">
                    {users.map((user) => (
                        <li key={user.id} className="flex items-center space-x-4 p-4 border rounded-md shadow-md">
                            <Image
                                src={user.avatar}
                                alt={`${user.first_name} ${user.last_name}`}
                                className="w-16 h-16 rounded-full"
                                width={150}
                                height={150}
                            />
                            <div>
                                <p className="text-lg font-medium">
                                    {user.first_name} {user.last_name}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {visibleEmailUserIds.includes(user.id) ? user.email : '***@***.***'}
                                </p>
                                <button
                                    onClick={() => dispatch(toggleEmailVisibility(user.id))}
                                    className="text-blue-500 hover:underline mt-2"
                                >
                                    {visibleEmailUserIds.includes(user.id) ? 'Hide' : 'Show'} Email
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center m-6 gap-5">
                    <Link
                        href="/"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    >
                        Home Page
                    </Link>
                    <button
                        onClick={async () => {
                            await signOut({ redirect: false });
                            router.replace("/");
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
                    >
                        Sign out
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}