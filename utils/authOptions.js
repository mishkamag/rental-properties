import connectDb from "@/config/database";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";

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
      await connectDb();
      //2 step: Check if user exist
      const userExists = await User.findOne({ email: profile.email });
      //3 step: If not, then add user to database, but if long just slice it
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      //4 step: Return to to allow sign in
      return true;
    },

    //Modifies to session object
    async session({ session }) {
      //1st step: Get user from Db
      const user = await User.findOne({ email: session.user.email });
      //2 step: Assign the user id to session
      session.user.id = user._id.toString();
      //3 step: return session
      return session;
    },
  },
};
