import About from "@/components/About";
import Events from "@/components/Events";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-black" >
    <Hero />
    <Events/>
    <About/>
    </div>
  );
}
