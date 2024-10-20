import { Account, NextAuthOptions, Profile, Session } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from "next-auth/jwt";

interface UserSession {
    id: string; // Add `id` to the user object
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ profile }: { profile?: Profile }) {
            if (!profile?.email) {
                console.error('Google Profile is missing email');
                return false;
            }
            return true;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            if (session?.user) {
                (session?.user as UserSession).id = token.sub as string;
            }
            return session;
        },
        async jwt({ token, account, profile }: { token: JWT; account?: Account | null; profile?: Profile | null }) {
            if (account && profile) {
                token.id = profile?.id;
            }
            return token;
        },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
