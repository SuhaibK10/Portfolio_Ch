import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Principles } from "@/sections/Principles";
import { Exploring } from "@/sections/Exploring";
import { Journey } from "@/sections/Journey";
import { Skills } from "@/sections/Skills";
import { FeaturedWork } from "@/sections/FeaturedWork";
import { Statement } from "@/sections/Statement";
import { Writing } from "@/sections/Writing";
import { Now } from "@/sections/Now";
import { BeyondCode } from "@/sections/BeyondCode";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Principles />
      <Exploring />
      <Journey />
      <Skills />
      <Statement />
      <FeaturedWork />
      <Writing />
      <Now />
      <BeyondCode />
      <Contact />
    </main>
  );
}
