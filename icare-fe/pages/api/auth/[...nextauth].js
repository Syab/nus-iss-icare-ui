import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


const options = {
    providers : [
        Providers.Credentials({
            name: 'credentials',
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            authorize: async (credentials) => {
                const user = {
                    "email": "tanhenghuat@gmail.com",
                    "uinfin": "S3100052A",
                    "name": "TAN HENG HUAT",
                    "address": "PEARL GARDEN, 102 BEDOK NORTH AVENUE 4, SINGAPORE 460102, #09-128.",
                    "mobileno": "+65-97399245",
                    "dob": "1998-06-06",
                    "sex": "FEMALE",
                    "nationality": "SINGAPORE CITIZEN",
                    "birthcountry": "SINGAPORE"
                }
                if (credentials) {
                    return user
                } else {
                    return null
                }
            }
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    session: {
        jwt : true,
        maxAge: 30 * 24 * 60 * 60,
    },
    jwt: {
        secret: 'i27c10a2r0e2i1saWeSoMe',
    },
    callbacks: {
        jwt: async (token, user) => {
            if (user) {
                token.jwt = user.jwt;
                token.user = user.user;
                token.accessToken = user?.accessToken;
            }
            return Promise.resolve(token);
        },
        session: async (session, token) => {
            session.jwt = token.jwt;
            session.accessToken = token.accessToken ? token.accessToken :
                session.user = token.user ? token.user : session.user;
            return Promise.resolve(session);
        },
    },
};

export default (req, res) => NextAuth(req, res, options)