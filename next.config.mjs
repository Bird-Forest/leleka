/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  images: {
    formats: ["image/webp"],
    qualities: [50, 75],
    localPatterns: [
      {
        pathname: "/public/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
