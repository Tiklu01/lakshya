import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/footer";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-black" >
    <Hero />
    <Events/>
    <About/>
    <Footer
        companyName="Lakshya 2k25"
        venueAddress="157/F, Nilgunj Rd, Sahid Colony, Panihati, Khardaha, West Bengal 700114"
      />
    </div>
  );
}
