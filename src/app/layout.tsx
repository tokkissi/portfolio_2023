import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "김제원의 포트폴리오",
  description: "신입 프론트엔드 개발자 김제원의 포트폴리오입니다. 개발에 참여한 프로젝트들과 사용 가능한 기술에 대해 소개합니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.className} max-w-5xl mx-auto bg-[#eee]`}>
        <NavigationBar />
        <ParticlesBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
