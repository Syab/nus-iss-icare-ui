const dev = process.env.NODE_ENV !== 'production'

export const SERVER = dev ? 'http://localhost:3001' : 'https://localhost:80'