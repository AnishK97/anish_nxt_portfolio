import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anish | Portfolio",
  description: "Anish | Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-950 text-gray-950 relative pt-36 `}
      >
        <div className="fixed bg-[#c25356] top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="fixed bg-[#483e94] top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] md:left-[-33remrem] sm:w-[68.75rem] lg:left-[-28rem] xl:left-[-5rem] "></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
