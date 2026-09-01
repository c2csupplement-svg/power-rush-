import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PowerRushProductShowcase from "@/components/home/PowerRushProductShowcase"
import MountainMarquee from "@/components/home/MountainMarquee";
import BuildGoal from "@/components/home/BuildGoal";
import Benefits from "@/components/home/Benefits";
import FinalStage from "@/components/home/FinalStage";
import PureFormula from "@/components/home/PureFormula";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PowerRushProductShowcase/>
      <PureFormula/>
      <MountainMarquee />
      <BuildGoal />
      <Benefits />
      <FinalStage />
    </main>
  );
}
