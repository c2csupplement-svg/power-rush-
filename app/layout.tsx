import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const tacticSans = localFont({
  src: "../src/fonts/tacticsansexd-med.otf",
  variable: "--tactic-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "POWER RUSH",
  description: "Ultra premium performance formula",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={tacticSans.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
