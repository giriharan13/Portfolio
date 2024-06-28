import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Expertise from "@/components/Expertise";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro/>
      <SectionDivider/>
      <Projects/>
      <Expertise/>
      <Education/>
      <Contact/>
    </main>
  )
}
