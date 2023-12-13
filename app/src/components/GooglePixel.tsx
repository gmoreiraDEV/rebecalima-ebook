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
    pixel.gtag_report_conversion(pathname as Location | (string & Location));
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${pixel.GA_MEASUREMENT_ID}`}
      />
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
