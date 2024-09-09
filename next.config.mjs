/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
