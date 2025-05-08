export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://leleka.vercel.app/sitemap.xml",
  };
}
