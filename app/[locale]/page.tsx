import { AboutMe } from "@/features/AboutMe";
import { Projects } from "@/features/Projects";
import { Contact } from "@/features/Contact";
import Blog from "@/features/Blog";

export default async function HomePage() {
  return (
    <main>
      <AboutMe />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
