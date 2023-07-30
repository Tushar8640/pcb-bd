import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: "nosecret",
  pages: {
    signIn: "https://pcbuilder-mocha.vercel.app/api/auth/signin",
  },
  url: "https://pcbuilder-mocha.vercel.app",
});
