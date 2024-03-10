import NextAuth from "next-auth"; 
import GoogleProvider from "next-auth/providers/google";  

console.log( process.env.GOOGLE_CLIENT_ID)
const handler = NextAuth({
   providers: [
     GoogleProvider({
       clientId: process.env.GOOGLE_ID,
       clientSecret: process.env.GOOGLE_SECRET,
     })
   ]
 });
  
export { handler as GET, handler as POST } 