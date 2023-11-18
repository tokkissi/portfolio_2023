import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.className} max-w-5xl mx-auto bg-[#eee]`}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
