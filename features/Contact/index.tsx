import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { useTranslations } from "next-intl";
import { Form } from "./components/Form";
import { cloneElement } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Tooltip } from "@/components/Tooltip";

const socialMedia = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/pedro-crelier/",
    icon: <BsLinkedin />,
  },
  {
    name: "Github",
    link: "https://github.com/toriality1",
    icon: <BsGithub />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/toriality1/",
    icon: <BsInstagram />,
  },
  {
    name: "Email",
    link: "mailto:pcrelier@hotmail.com",
    icon: <HiMail />,
  },
];

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <Section color="bg-white" className="space-y-16" id="Contact">
      <SectionHeader>{t("title")}</SectionHeader>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Form
          alert_msg={t("alert")}
          email={t("email")}
          message={t("message")}
          send_msg={t("send")}
          sending={t("sending")}
        />
        <div>
          <ul className="flex justify-center md:flex-col gap-8 md:gap-4">
            {socialMedia.map((item) => (
              <li key={item.name}>
                <Tooltip text={item.name}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {cloneElement(item.icon, {
                      size: 24,
                      className: "text-accent hover:text-accent-darker",
                    })}
                  </a>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
