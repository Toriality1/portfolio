import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "./components/Header";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
});
const ubuntu_mono = Ubuntu_Mono({
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pedro Crelier | Software Engineer",
  description: "TODO", // TODO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          ubuntu.variable,
          ubuntu_mono.variable,
          "bg-slate-950 overflow-x-hidden"
        )}
      >
        {/*  TODO: Improve*/}
        {/* <div className="bg-emerald-600 absolute top-0 left-[40rem] h-[30rem] w-[50rem] rounded-full blur-[10rem] opacity-30" />
        <div className="bg-slate-500 absolute top-0 right-[40rem] h-[30rem] w-[50rem] rounded-full blur-[10rem] opacity-30" /> */}

        <Header />
        {children}
      </body>
    </html>
  );
}
