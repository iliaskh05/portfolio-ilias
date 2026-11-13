import { setRequestLocale } from "next-intl/server";
import { ScrollSequence } from "@/components/system/ScrollSequence";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Sailing } from "@/components/sections/Sailing";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <ScrollSequence>
      <Hero />
      <Experience />
      <WhatIDo />
      <About />
      <Work />
      <Sailing />
      <TechStack />
      <Contact />
    </ScrollSequence>
  );
}
