import { getServerSession, type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import prisma from "@/lib/prisma"
import { env } from "env.mjs"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: { prompt: "consent" },
      },
    }),
  ],
  pages: {
    signIn: `/login`,
    verifyRequest: `/login`,
    error: "/login",
  },
  //   adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
}

export function getSession() {
  return getServerSession(authOptions) as Promise<{
    user: {
      id: string
      name: string
      username: string
      email: string
      image: string
    }
  } | null>
}
