import { AboutMe } from "@/features/AboutMe";
import { Projects } from "@/features/Projects";
import { Contact } from "@/features/Contact";

export default async function HomePage() {
  return (
    <main className="">
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
