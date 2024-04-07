import { useTranslations } from "next-intl";
import { ResumeLink } from "./ResumeLink";
import { SocialIcons } from "./SocialIcons";

export const Bio = () => {
  const t = useTranslations("About");

  return (
    <div className="flex basis-1/2 flex-col">
      <h3 className="title mt-1 text-3xl text-accent">{t("about")}</h3>
      <div className="flex h-full flex-col gap-8">
        <p
          className="leading-loose"
          dangerouslySetInnerHTML={{
            __html: t.raw("p1"),
          }}
        />
        <p
          className="leading-loose"
          dangerouslySetInnerHTML={{ __html: t.raw("p2") }}
        />
        <div className="hidden flex-col gap-4 md:visible md:flex">
          <ResumeLink />
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
