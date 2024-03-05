import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //Invoke when signin is successful
    async signIn({ profile }) {
      //1st step: Connect to DB
      //2 step: Check if user exist
      //3 step: If not, then add user to database
      //4 step: Return to to allow sign in
    },

    //Modifies to session object
    async session({ session }) {
      //1st step: Get user from Db
      //2 step: Assign the user id to session
      //3 step: return session
    },
  },
};
