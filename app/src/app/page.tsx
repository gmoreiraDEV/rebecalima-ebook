"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ConquestComponent from "@/components/Conquest";
import ContentComponent from "@/components/Content";
import EssentialComponent from "@/components/Essential";
import HeroComponent from "@/components/Hero";
import IdealForYouComponent from "@/components/IdealForYou";
import RebecaLimaComponent from "@/components/RebecaLima";
import SaleComponent from "@/components/Sale";
import ValueComponent from "@/components/Value";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="flex flex-col items-center gap-8 w-full">
      <HeroComponent />
      <EssentialComponent />
      <ContentComponent />
      <ValueComponent />
      <IdealForYouComponent />
      <ConquestComponent />
      <SaleComponent />
      <RebecaLimaComponent />
      <ValueComponent />
    </main>
  );
}
