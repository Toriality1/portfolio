import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";

export default function HomePage() {
  return (
    <main className="px-40 flex flex-col justify-center items-center">
      <Home />
      <AboutMe />
    </main>
  );
}
