import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { FaRegDotCircle } from "react-icons/fa";
import { Title } from "./components/Title";
import { Info } from "./components/Info";
import { useTranslations } from "next-intl";

export const AboutMe = () => {
  const t = useTranslations("About");

  return (
    <Section
      color="bg-gradient-to-b from-main from-95% to-main-darker"
      id="About"
    >
      <div className="space-y-20">
        <Title
          title={t("title")}
          roles={[t("roles.0"), t("roles.1"), t("roles.2"), t("roles.3")]}
        />
        <Info />
      </div>
      <p className="mt-10 text-center font-extralight text-accent opacity-50">
        {t("quote")}
      </p>
    </Section>
  );
};

const technologies_data = [
  "Typescript",
  "React.js",
  "Next.js",
  "Tailwind",
  "HTML & CSS",
  "Node.js",
  "Express.js",
  "Mongoose",
  "MongoDB",
  "MySQL",
  "SQLite",
  "SASS/SCSS",
  "Electron.js",
] as const;
