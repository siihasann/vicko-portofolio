import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerate";
import { LogoHero } from "../ui/LogoHero";
import HomeContactButton from "../ui/ContactButton";

const Hero = () => {
  return (
    <div className="pb-10 lg:pt-24 pt-48">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <LogoHero/>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Fotografi yang Menyampaikan Lebih dari Sekadar Gambar"
            className="text-center text-[30px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-sm lg:text-2xl">
            Hi! I&apos;m Ahmad Vicko, freelance fotografer based in Surakarta.
          </p>

          <HomeContactButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;