import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: {label: "Email", type: "text", placeholder: "john@doe.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials){
                const user = {name: "John Doe", email: "john@doe.com"}
                return user
            }
        })
    ],
}

export default (req, res) => NextAuth(req, res, options)