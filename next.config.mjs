/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "alabamaoutsidecounsel.com",
      },
        {
        protocol: "http",
        hostname: "alabamaoutsidecounsel.com",
      },
      
    ],
  },
};

export default nextConfig;