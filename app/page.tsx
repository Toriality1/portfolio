import { AboutMe } from "@/features/AboutMe";
import { Home } from "@/features/Home";
import { Projects } from "@/features/Projects";
import { useRouter } from "next/router";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Home />
      <AboutMe />
      <Projects />
    </main>
  );
}
