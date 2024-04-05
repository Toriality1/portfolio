import type { Metadata } from "next";
import {
  Roboto as main_font_name,
  Teko as title_font_name,
  // Staarliches
  // Mate_SC
} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/features/Header";

import { cookies } from "next/headers";
import { ActiveSectionProvider } from "@/features/Header/context/ActiveSection";

const main_font = main_font_name({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-main",
});
const title_font = title_font_name({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Pedro Crelier | Software Engineer",
  description: "TODO", // TODO
};

async function getData() {
  const cookieStore = cookies();

  return {
    cookieValue: cookieStore,
  };
}

export default async function RootLayout({
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
        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
