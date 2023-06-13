import "@/globals.css";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Dir Demo",
  description: "Ecommerce demo with App Dir",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar prefix="/app-dir" />
        <main className="py-16">{children}</main>
        {modal}
        <Footer />
      </body>
    </html>
  );
}
