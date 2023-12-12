"use client";

import { useEffect, useRef } from "react";
import { useExitIntent } from "use-exit-intent";
import CookieConsent from "react-cookie-consent";
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
import ExitPopup from "@/components/ExitPopup";
import { useExitPopupStore } from "@/stores/exitPopup";

export default function Home() {
  const mainRef = useRef(null);
  const { setShowExitPopUp } = useExitPopupStore();
  const { registerHandler } = useExitIntent({
    cookie: {
      key: "exit-intent",
      daysToExpire: 1,
    },
    desktop: {
      delayInSecondsToTrigger: 10,
      triggerOnMouseLeave: true,
      triggerOnIdle: false,
      useBeforeUnload: false,
    },
    mobile: {
      delayInSecondsToTrigger: 10,
      triggerOnIdle: true,
    },
  });

  registerHandler({
    id: "exitModal",
    handler: () => setShowExitPopUp(),
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main
      className="flex flex-col items-center gap-8 w-full relative"
      ref={mainRef}
    >
      <HeroComponent />
      <EssentialComponent />
      <ContentComponent />
      <ValueComponent />
      <IdealForYouComponent />
      <ConquestComponent />
      <SaleComponent />
      <RebecaLimaComponent />
      <ValueComponent />
      <ExitPopup />
      <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        style={{
          background: "#49072A",
          color: "#F9EBFF",
          textAlign: "left",
        }}
        buttonStyle={{
          background: "#F9EBFF",
          color: "#89093D",
          fontSize: "13px",
        }}
      >
        Topa um acordo delicioso? 🎄 Clica em <strong>Aceitar</strong> para
        abrir as portas para nossos cookies especiais. 🍪✨ Prometemos que são
        tão leves quanto a neve e mais gostosos que a ceia de Natal!
        Consentimento é a chave para uma experiência online tão deliciosa quanto
        uma manhã natalina.🎁🥳
      </CookieConsent>
    </main>
  );
}
