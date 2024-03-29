import type { Metadata } from "next";
import {
  Ubuntu as main_font_name,
  Ubuntu_Mono as title_font_name,
} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/features/Header";

const main_font = main_font_name({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-main",
});
const title_font = title_font_name({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-title",
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
          main_font.variable,
          title_font.variable,
          "bg-gray-200",
        )}
      >
        <Header />
        {/* {children} */}
      </body>
    </html>
  );
}
