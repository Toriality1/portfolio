import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { MdOutlineAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { send } from "@/actions/send";
import { Submit } from "./components/Submit";
import { useTranslations } from "next-intl";
import { Form } from "./components/Form";

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <Section color="bg-white" className="space-y-16" id="Contact">
      <SectionHeader>{t("title")}</SectionHeader>
      <Form
        alert_msg={t("alert")}
        email={t("email")}
        message={t("message")}
        send_msg={t("send")}
        sending={t("sending")}
      />
    </Section>
  );
};
