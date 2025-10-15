"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Ctaband() {
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);

  const overlayRef1 = useRef<HTMLDivElement>(null);
  const overlayRef2 = useRef<HTMLDivElement>(null);
  const overlayRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupAnimation = (
      imageRef: React.RefObject<HTMLDivElement | null>,
      overlayRef: React.RefObject<HTMLDivElement | null>
    ) => {
      if (!imageRef.current || !overlayRef.current) return;

      gsap.set(imageRef.current, { opacity: 0 });

      gsap.set(overlayRef.current, { opacity: 1 });

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
      <div className="container-desktop p-0 overflow-hidden w-full">
        {/* Desktop View */}
        <div className="hidden lg:flex w-full h-full">
          <div className="w-1/2 bg-[var(--secondary)] p-0 border-x border-t border-black h-full">
            <h2 className="text-[5vh] px-4 font-extrabold mb-8 text-black">
              DISCOVER YOUR POTENTIAL
            </h2>

            <div className=" h-full overflow-y-auto">
              <div className="border-t  border-black px-4 py-4">
                <h3 className="text-[3vh] font-bold mb-2 text-black">
                  EXPERT COACHING
                </h3>
                <p className="text-[2vh] text-black">
                  Trainers who are passionate about your progress.
                </p>
              </div>

              <div className="border-t  border-y border-black px-4 py-4">
                <h3 className="text-[3vh] font-bold mb-2 text-black">
                  RESULTS-DRIVEN PROGRAMS
                </h3>
                <p className="text-[2vh] text-black">
                  Workouts that deliver tangible, measurable results.
                </p>
              </div>

              <div className=" border-black px-4 py-4">
                <h3 className="text-[3vh] font-bold mb-2 text-black">
                  A SUPPORTIVE TRIBE
                </h3>
                <p className="text-[2vh] text-black">
                  A community that pushes you to be your best.
                </p>
              </div>

              <div className=" border-y border-black py-8 px-4">
                <Link
                  href="/classes"
                  className="inline-block text-[2vh] px-4 py-2 rounded-md text-black font-mono hover:bg-[var(--black)] hover:text-white"
                >
                  VIEW CLASSES
                </Link>
              </div>
            </div>
          </div>

          <div className="w-1/2 relative" ref={imageRef1}>
            <div
              ref={overlayRef1}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/image.png"
              alt="People working out in gym"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <div className="flex w-full h-full">
            <div className="w-1/2 bg-[#f0f4ff] p-0 border-x border-t border-black h-full">
              <h2 className="text-[3vh] px-4 font-extrabold mb-6 text-black">
                DISCOVER YOUR POTENTIAL
              </h2>

              <div className="border-t border-black px-4 py-4">
                <h3 className="text-[2.2vh] font-bold mb-2 text-black">
                  EXPERT COACHING
                </h3>
                <p className="text-[1.8vh] font-normal text-black">
                  Trainers who are passionate about your progress.
                </p>
              </div>

              <div className="border-t border-black px-4 py-4">
                <h3 className="text-[2.2vh] font-bold mb-2 text-black">
                  RESULTS-DRIVEN PROGRAMS
                </h3>
                <p className="text-[1.8vh] font-normal text-black">
                  Workouts that deliver tangible, measurable results.
                </p>
              </div>

              <div className="border-t border-black px-4 py-4">
                <h3 className="text-[2.2vh] font-bold mb-2 text-black">
                  A SUPPORTIVE TRIBE
                </h3>
                <p className="text-[1.8vh] font-normal text-black">
                  A community that pushes you to be your best.
                </p>
              </div>

              <div className="border-t border-y border-black py-6 px-4">
                <Link
                  href="/classes"
                  className="inline-block text-[2vh] font-mono text-black"
                >
                  VIEW CLASSES
                </Link>
              </div>
            </div>

            <div className="w-1/2 relative" ref={imageRef2}>
              <div
                ref={overlayRef2}
                className="absolute inset-0 bg-black z-10"
              ></div>
              <Image
                src="/image.png"
                alt="People working out in gym"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="relative" ref={imageRef3}>
            <div
              ref={overlayRef3}
              className="absolute inset-0 bg-black z-10"
            ></div>
            <Image
              src="/image.png"
              alt="People working out in gym"
              width={400}
              height={300}
              className="w-full h-[30vh] object-cover"
              priority
            />
          </div>

          <div className="bg-[#f0f4ff]">
            <h3 className="text-[4vh] font-bold pl-2 mb-4 text-black">
              DISCOVER YOUR POTENTIAL
            </h3>

            <div className="border-t border-x border-black p-3">
              <h4 className="text-[2.5vh] font-bold mb-1 text-black">
                EXPERT COACHING
              </h4>
              <p className="text-[1.8vh] text-black">
                Trainers who are passionate about your progress.
              </p>
            </div>

            <div className="border-t border-x border-black p-3">
              <h4 className="text-[2.5vh] font-bold mb-1 text-black">
                RESULTS-DRIVEN PROGRAMS
              </h4>
              <p className="text-[1.8vh] text-black">
                Workouts that deliver tangible, measurable results.
              </p>
            </div>

            <div className="border-t border-x border-black p-3">
              <h4 className="text-[2.5vh] font-bold mb-1 text-black">
                A SUPPORTIVE TRIBE
              </h4>
              <p className="text-[1.8vh] text-black">
                A community that pushes you to be your best.
              </p>
            </div>

            <div className="border-t border-x border-y border-black py-6 flex justify-center">
              <Link
                href="/classes"
                className="inline-block text-[2vh]  text-black font-mono hover:text-[var(--primary)] transition-colors"
              >
                VIEW CLASSES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
