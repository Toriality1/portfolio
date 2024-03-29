"use client";

import { Title } from "./components/Title";
import { HomeButtons } from "./components/HomeButtons";
import { Section } from "@/components/Section";

export const Home = () => {
  return (
    <Section className="justify-center">
      <div className="flex w-1/2 flex-col gap-28">
        <Title />
        <HomeButtons />
      </div>
      <svg className="hidden">
        <defs>
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.44" />
          </filter>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <circle cx="50%" cy="50%" r="40%" fill="white" />
          </mask>
        </defs>
      </svg>
      <div className="animation-container">
        <div className="grainy-content" />
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
        <div className="shape5"></div>
        <div className="shape6"></div>
      </div>
      <p className="title absolute bottom-5 right-16 font-black italic tracking-wider text-white mix-blend-overlay">
        Be the change you want to see in the world
      </p>
    </Section>
  );
};
