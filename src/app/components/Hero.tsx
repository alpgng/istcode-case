"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const imageRef4 = useRef<HTMLDivElement>(null);
  const imageRef5 = useRef<HTMLDivElement>(null);
  const imageRef6 = useRef<HTMLDivElement>(null);

  const overlayRef1 = useRef<HTMLDivElement>(null);
  const overlayRef2 = useRef<HTMLDivElement>(null);
  const overlayRef3 = useRef<HTMLDivElement>(null);
  const overlayRef4 = useRef<HTMLDivElement>(null);
  const overlayRef5 = useRef<HTMLDivElement>(null);
  const overlayRef6 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupAnimation = (
      imageRef: React.MutableRefObject<HTMLDivElement | null>,
      overlayRef: React.MutableRefObject<HTMLDivElement | null>
    ) => {
      if (!imageRef.current || !overlayRef.current) return;

      gsap.set(imageRef.current, { opacity: 0 });

      gsap.set(overlayRef.current, { opacity: 1 });

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      tl.to(
        imageRef.current,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      );

      return tl;
    };

    const timelines = [
      setupAnimation(imageRef1, overlayRef1),
      setupAnimation(imageRef2, overlayRef2),
      setupAnimation(imageRef3, overlayRef3),
      setupAnimation(imageRef4, overlayRef4),
      setupAnimation(imageRef5, overlayRef5),
      setupAnimation(imageRef6, overlayRef6),
    ];

    return () => {
      timelines.forEach((tl) => {
        if (tl && tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        if (tl) tl.kill();
      });
    };
  }, []);

  return (
    <section className="w-full bg-[var(--secondary)]">
      <div className="container-desktop p-0 overflow-hidden">
        {/* Desktop  */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-0">
          <div
            className="col-span-2 row-span-1 relative h-[480px] bg-[var(--secondary)]"
            ref={imageRef1}
          >
            <div
              ref={overlayRef1}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/hero.png"
              alt="Person training at gym"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="col-span-1 row-span-1 border-r border-t border-black bg-[var(--secondary)] p-6">
            <h2 className="text-[3rem] tracking-tight font-bold mb-4 text-black">
              FOR THE COMMITTED
            </h2>
            <p className="text-[1rem] pt-30 mb-6 text-black">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>
            <Link
              href="/about-us"
              className="Button Button-secondary inline-block hover:bg-[var(--black)] hover:text-white"
            >
              ABOUT US
            </Link>
          </div>

          <div className="col-span-1 row-span-1 p-6 border-l border-b border-black bg-[var(--secondary)]">
            <h3 className="text-[3rem] tracking-tight font-bold mb-3 text-black">
              GUIDED BY EXPERTS
            </h3>
            <p className="text-[1rem] pt-40 text-black">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>

          <div className="col-span-1 row-span-1 p-6 border-l border-b border-black bg-[var(--secondary)]">
            <h3 className="text-[3rem] tracking-tight font-bold mb-3 text-black">
              DYNAMIC OPEN GYM
            </h3>
            <p className="text-[1rem] pt-40 text-black">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>

          <div
            className="col-span-1 row-span-1 relative h-[479px] bg-[var(--secondary)]"
            ref={imageRef2}
          >
            <div
              ref={overlayRef2}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/Hero2.png"
              alt="Woman with training rope"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className="hidden md:grid lg:hidden grid-cols-3 grid-rows-2 gap-0 w-full h-full">
          <div
            className="col-span-2 row-span-1 relative h-[300px] bg-[var(--secondary)]"
            ref={imageRef3}
          >
            <div
              ref={overlayRef3}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/hero.png"
              alt="Person training at gym"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="col-span-1 row-span-1 bg-[var(--secondary)] p-5">
            <h2 className="text-[1.5vh] whitespace-nowrap font-extrabold mb-3 text-black">
              FOR THE COMMITTED
            </h2>
            <p className="text-sm mb-4 text-black">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>
            <Link
              href="/about-us"
              className="Button Button-secondary inline-block"
            >
              ABOUT US
            </Link>
          </div>

          <div className="col-span-1 row-span-1 p-5 bg-[var(--secondary)]">
            <h3 className="text-[1.25rem] font-bold mb-2 text-black">
              GUIDED BY EXPERTS
            </h3>
            <p className="text-sm text-black">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>

          <div className="col-span-1 row-span-1 p-5 bg-[var(--secondary)]">
            <h3 className="text-[1.25rem] font-bold mb-2 text-black">
              DYNAMIC OPEN GYM
            </h3>
            <p className="text-sm text-black">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>

          <div
            className="col-span-1 row-span-1 relative h-[299px] bg-[var(--secondary)]"
            ref={imageRef4}
          >
            <div
              ref={overlayRef4}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/Hero2.png"
              alt="Woman with training rope"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Mobile  */}
        <div className="block md:hidden space-y-0 w-full h-full">
          {/* Ana resim */}
          <div
            className="relative h-[250px] w-full bg-[var(--secondary)]"
            ref={imageRef5}
          >
            <div
              ref={overlayRef5}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/hero.png"
              alt="Person training at gym"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="bg-[var(--secondary)] p-4">
            <h2 className="text-[1.5rem] font-bold mb-3 text-black">
              FOR THE COMMITTED
            </h2>
            <p className="text-sm mb-4 text-black">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>
            <Link
              href="/about-us"
              className="Button Button-secondary inline-block"
            >
              ABOUT US
            </Link>
          </div>

          <div className="p-4 bg-[var(--secondary)] w-full">
            <h3 className="text-[1.25rem] font-bold mb-2 text-black">
              GUIDED BY EXPERTS
            </h3>
            <p className="text-sm text-black">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>

          <div
            className="relative h-[479px] w-full bg-[var(--secondary)]"
            ref={imageRef6}
          >
            <div
              ref={overlayRef6}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/Hero2.png"
              alt="Woman with training rope"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="p-4 bg-[var(--secondary)] w-full">
            <h3 className="text-[1.25rem] font-bold mb-2 text-black">
              DYNAMIC OPEN GYM
            </h3>
            <p className="text-sm text-black">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
