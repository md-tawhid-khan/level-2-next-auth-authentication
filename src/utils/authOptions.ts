import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";


export const authOptions:NextAuthOptions= {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
  }),
  
  ],
  
}

