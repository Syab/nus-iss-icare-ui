module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['upload.wikimedia.org', 'logodix.com', 'freevectorlogo.net', 'logoeps.com', 'encrypted-tbn0.gstatic.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    dirs: ['pages'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
