import { Nunito } from "next/font/google";
import cl from "./page.module.scss";
import Header from "@/components/Header/Header";
// import "./globals.css";

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

export const metadata = {
  title: "Лелека медичний центр",
  description:
    'Медичний центр "Лелека" - це сімейна медицина з турботою про вас і ваших близьких',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${nunito.variable} ${cl.wrapper}`}>
        <Header />
        <main className={cl.container}>{children}</main>
      </body>
    </html>
  );
}
