import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tutors from "@/components/sections/Tutors";
import Courses from "@/components/sections/Courses";
import Posts from "@/components/sections/Posts";
import FAQ from "@/components/sections/FAQ";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider variant="curve" className="-mt-16 mb-16" />
      <About />
      <SectionDivider variant="wave" className="text-white" />
      <Tutors />
      <SectionDivider variant="default" className="my-16" />
      <Courses />
      <SectionDivider variant="wave" className="text-white rotate-180" />
      <Posts />
      <SectionDivider variant="curve" className="rotate-180 -mb-16 -mt-16" />
      <FAQ />
    </>
  );
}


