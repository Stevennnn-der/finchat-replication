// src/components/LogoScrollSection.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/LogoScroll.module.css";

const logos = [
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fwoodlock.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbaskin.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbcg.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcfi.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcornell.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdecent.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdelorean.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fmckinsey.png&w=3840&q=75",
  },
  {
    src: "https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Frvc.png&w=3840&q=75",
  },
];
export default function LogoScrollSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const scrollContainer = scrollContainerRef.current;
  //     if (!scrollContainer) return;

  //     let scrollAmount = 0;
  //     const scrollSpeed = 1; // Adjust this value to increase/decrease the speed
  //     let animationFrameId: number;

  //     const scroll = () => {
  //       scrollAmount += scrollSpeed;
  //       scrollContainer.scrollLeft = scrollAmount;

  //       if (
  //         scrollAmount >=
  //         scrollContainer.scrollWidth - scrollContainer.clientWidth
  //       ) {
  //         scrollAmount = 0;
  //       }

  //       animationFrameId = requestAnimationFrame(scroll);
  //     };

  //     animationFrameId = requestAnimationFrame(scroll);

  //     return () => cancelAnimationFrame(animationFrameId);
  //   }, []);

  return (
    <div className={styles.logos}>
      <div className={styles.logos_slide}>
        {logos.map((logo) => (
          <Image
            src={logo.src}
            alt={" "}
            width={90}
            height={60}
            className="inline-block m-2"
          />
        ))}
      </div>
      <div className={styles.logos_slide}>
        {logos.map((logo) => (
          <Image
            src={logo.src}
            alt={" "}
            width={90}
            height={60}
            quality={75}
            className="inline-block m-2"
          />
        ))}
      </div>
    </div>
  );
}
