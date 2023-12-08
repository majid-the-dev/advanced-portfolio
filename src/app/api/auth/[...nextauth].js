import { User } from "@/models/User";
import * as mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "johndoe" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;
                
                mongoose.connect(process.env.MONGO_URL);
                const user = await User.findOne({username});

                if (res.ok && user) {
                    return user;
                }

                return null
            }
        })
    ]
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};