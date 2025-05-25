/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // allow loading from fakestoreapi.com
    domains: ["fakestoreapi.com"],
    // —OR— for more fine-grained control, you can use remotePatterns:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'fakestoreapi.com',
    //     port: '',
    //     pathname: '/img/**',
    //   },
    // ],
  },
};
