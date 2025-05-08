import { Nunito } from "next/font/google";
import React, { Suspense } from "react";
import cl from "./page.module.scss";
import Header from "@/components/Header/Header";
import { DEFAULT_SEO } from "@/util/seo.config";
import Loader from "@/components/Helper/Loader";

export const nunito = Nunito({
  variable: "--font-nunito",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = DEFAULT_SEO;

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${nunito.variable} ${cl.wrapper}`}>
        <Suspense fallback={<Loader />}>
          <Header />
          <main className={cl.container}>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
