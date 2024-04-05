import { Bio } from "./Bio";
import { ResumeLink } from "./ResumeLink";
import { Skills } from "./Skills";
import { SocialIcons } from "./SocialIcons";

export const Info = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:items-stretch">
      <Bio />
      <Skills />
      <div className="m-auto flex flex-col items-center gap-8 md:hidden">
        <ResumeLink />
        <SocialIcons />
      </div>
    </div>
  );
};
