import { AboutPageHero } from "@/components/AboutPageHero";

import { CoreTeamAlt } from "@/components/CoreTeamAlt";
import { TextGenerateEffectDemo } from "@/components/College";


export default function About() {
    return (
      <div>
        <div className="flex min-h-screen flex-col items-center justify-between">
       <AboutPageHero/>
       <TextGenerateEffectDemo />
       <CoreTeamAlt />
      </div>
      </div>
    );
  }