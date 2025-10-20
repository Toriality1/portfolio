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
import { useTranslations } from "next-intl";

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
  title: "Pedro Crelier | Portfolio",
  description:
    "Software Engineer with 5+ years of experience in web technologies.",
  openGraph: {
    title: "Pedro Crelier | Portfolio",
    description:
      "Software Engineer with 5+ years of experience in web technologies.",
    siteName: "Pedro Crelier | Portfolio",
    url: "https://toriality.vercel.app",
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
      },
    ],
    type: "website",
  },
};

async function getData() {
  const cookieStore = cookies();

  return {
    cookieValue: cookieStore,
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const t = useTranslations("Header");

  return (
    <html lang={locale}>
      <body
        className={twMerge(
          main_font.variable,
          title_font.variable,
          "bg-gray-200",
        )}
      >
        <ActiveSectionProvider>
          <Header
            locale={locale}
            names={{
              About: t("About"),
              Projects: t("Projects"),
              Blog: t("Blog"),
              Contact: t("Contact"),
            }}
          />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
