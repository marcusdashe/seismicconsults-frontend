import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
// import { Author } from "@web/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seismic Consults Limited",
  description:
    "Technical and Vocational Education Management Information System",
  keywords: ["Seismicconsults", "Seismic", "Consultancy"],
  //  authors: [
  //   Author("Marcus Dashe"),]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
