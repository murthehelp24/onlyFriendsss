import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import authController from "../api/src/controllers/auth.controller.js";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        return await authController.handleSignIn({ user, account })
      }
      return true
    },
    async session({ session, token }) {
      if (session.user) {
        if (token && session.user) {
          session.user.id = token.id
          session.user.trustScore = token.trustScore
          session.user.isVerified = token.isVerified
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/login'
  }
})