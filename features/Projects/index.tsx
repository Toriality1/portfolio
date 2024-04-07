import { projects_data } from "@/data/projects";
import { Section } from "@/components/Section";
import { Project } from "./components/Project";
import { SectionHeader } from "@/components/SectionHeader";
import { useTranslations } from "next-intl";

export const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <Section
      color="bg-main-darker"
      className="space-y-16"
      id="Projects"
      threshold={0.2}
    >
      <SectionHeader>{t("title")}</SectionHeader>
      <div className="space-y-10">
        {projects_data.map((project, i) => (
          <div key={project.for} className="pt-2 text-accent">
            <div className="flex items-center gap-4">
              <p className="title text-sm tracking-wider">{project.for}</p>
              <div className="h-[1px] grow bg-accent opacity-20" />
            </div>
            <div className="py-4">
              <ul className="flex flex-col sm:flex-row sm:flex-wrap ">
                {project.data.map((p) => (
                  <Project key={p.title} {...p} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
