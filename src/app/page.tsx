import { About } from "../components/about/About";
import { HeaderSection } from "../components/headerSection/HeaderSection";
import { Projects } from "../components/project/Projects";

export default function Home() {
  return (
    <section className="max-w-[670px] m-auto">
      <HeaderSection />
      <About />
      <Projects />
    </section>
  );
}
