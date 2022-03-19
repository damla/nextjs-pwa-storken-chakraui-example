import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'

export default NextAuth({
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials, baseUrl }) {
      // saving twitter informations to db
      user.name = profile.name
      user.username = profile.screen_name
      user.location = profile.location
      user.description = profile.description
      user.url = profile.url
      user.followers_count = profile.followers_count
      return true
    },
    async session({ session, token, user }) {
      // gettings db values for session
      session.user = user
      return session
    }
  }
})
