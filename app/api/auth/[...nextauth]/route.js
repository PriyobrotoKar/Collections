import Credentials from "@/app/schemas/user";
import { Connection } from "@/app/utils/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === 'google') {

                const { email, name } = user;

                try {
                    await Connection();
                    const ExistingCredentials = await Credentials.findOne({ email });

                    if (!ExistingCredentials) {
                        const res = await fetch("https://collections-lemon.vercel.app/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name, email
                            })
                        });

                        if (res.ok) {
                            return user;
                        }
                    }

                } catch (error) {
                    console.log("ERR:" + error);
                }

            }

            return user;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };