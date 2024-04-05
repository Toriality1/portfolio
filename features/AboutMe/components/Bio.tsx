import { ResumeLink } from "./ResumeLink";
import { SocialIcons } from "./SocialIcons";

export const Bio = () => {
  return (
    <div className="flex basis-1/2 flex-col">
      <h3 className="title mt-1 text-3xl text-accent">About me...</h3>
      <div className="flex h-full flex-col gap-8">
        <p className="leading-loose">
          Detail-oriented <strong>Fullstack Developer</strong> with 4+ years of
          experience in web technologies with a effective and creative approach
          for every project. Since 2019, I have been developing and contributing
          to open-source applications, websites and games.
        </p>
        <p className="leading-loose">
          Proficient in Front-end frameworks and libraries such as{" "}
          <strong>React.js, Next.js, and Tailwind.</strong> I also have
          experience with Back-end technologies such as{" "}
          <strong>Node.js, Express.js</strong>, and both relational and
          non-relational databases.
        </p>
        <div className="hidden flex-col gap-4 md:visible md:flex">
          <ResumeLink />
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
