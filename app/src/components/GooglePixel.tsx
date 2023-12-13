"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as pixel from "@/lib/gpixel";

const GooglePixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;
  }, [pathname, loaded]);
  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11441820553" />
      <Script
        id="google-analytics"
        src="/scripts/gtag.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-google-pixel-id={pixel.GA_MEASUREMENT_ID}
      />
    </div>
  );
};

export default GooglePixel;
