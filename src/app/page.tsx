"use client";
import { About } from "../components/about/About";
import { HeaderSection } from "../components/headerSection/HeaderSection";
import { Projects } from "../components/projects/Projects";



export default function Home() {
  return (
    <section className="max-w-[670px] relative m-auto px-4">
            
      <HeaderSection />
      <About />
      <Projects />  
       
    </section>
  );
}
