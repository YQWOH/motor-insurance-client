/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { Profile as NextAuthProfile } from 'next-auth';

declare module "next-auth" {
    interface Session {
        user: {
            id: string; // Add `id` to the user object
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }

    interface User {
        id: string; // Add `id` to the user object
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }

    interface Profile extends NextAuthProfile {
        id?: string;  // Assuming that Google returns an `id` field, make this optional.
    }
}