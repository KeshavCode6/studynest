import NextAuth from "next-auth"; 
import GoogleProvider from "next-auth/providers/google";  
import { useSession, useRouter } from "next-auth/react";

export const authConfig = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ]
});
