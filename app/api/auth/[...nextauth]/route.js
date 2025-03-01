import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "../../../auth/signin", 
      },
});
export { handler as GET, handler as POST };