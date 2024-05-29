import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import Navigation from "./_components/Navigation";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-800 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Navigation />

        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
