import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            // @ts-ignore
          clientId: process.env.GOOGLE_CLIENT_ID,
            // @ts-ignore
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
    
})