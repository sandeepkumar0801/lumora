"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageLoader from "@/components/PageLoader";
gsap.registerPlugin(ScrollTrigger);

const ViewContainer = ({ items }) => {
  const viewBoxRef = useRef(null);

  useEffect(() => {
    gsap.from(".view-box", {
      scrollTrigger: {
        trigger: viewBoxRef.current,
        start: "top bottom",
        end: "30% 30%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      y: 250,
      duration: 5,
      ease: "power2.out",
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="bg-white w-full m-auto flex flex-wrap">
      {items.map((item, index) => (
        <div
          ref={viewBoxRef}
          key={index}
          className="relative view-box lg:w-[25%] m-auto w-[50%] min-h-[47.5vh] lg:min-h-[90vh] sm:min-h-[70vh] border border-white"
        >
          <Image
            width={481} height={929} layout="responsive"
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="flex items-center space-x-2">
              <h2 className="text-white text-sm text-center sm:text-lg xl:text-xl -translate-y-[50px]">
                {item.title}
              </h2>
            </div>
          </div>

          <div className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px]">
            <Image
              width={115} height={115} layout="responsive"
              sizes="5vw"
              src={item.icon}
              alt="Icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Homepage = () => {
  const items = [
    {
      image: "/Nature-trails.png",
      alt: "nature-trails-img",
      title: "Nature Trails",
      icon: "/Nature-icon.png",
    },
    {
      image: "/Panaromic-view.png",
      alt: "panoramic-view-img",
      title: "Panoramic mountain view",
      icon: "/Panaromic-icon.png",
    },
    {
      image: "/Resort-living.png",
      alt: "resort-living-img",
      title: "Resort living",
      icon: "/Resort-living-icon.png",
    },
    {
      image: "/Zen-garden.png",
      alt: "zen-garden-img",
      title: "Zen garden",
      icon: "/Zen-garden-icon.png",
    },
  ];
  const [isPageLoaderDone, setIsPageLoaderDone] = useState(false);
  const handlePageLoaderComplete = () => {
    setIsPageLoaderDone(true); // Signal that PageLoader animations are done
  };

  return (
    <section className="w-full">
      <PageLoader onAnimationComplete={handlePageLoaderComplete} />
      <div className="w-full relative">
        <Header startAnimations={isPageLoaderDone} />

        <div className="absolute bg-greenTheme w-[26.9%] 450:block hidden h-full  top-0 -z-[10]">
          <div className="pl-[17.5%] absolute pr-[10%] md:pt-[25%] 450:pt-[55px] pt-[50px]">
            <h1 className="text-mainText text-[2.5vw]">
              Where vision meets reality and dreams find their address
            </h1>
            <h2 className="text-white text-[1.3vw]">
              This isn't just real estate: it's a philosophy.One that asks, "Why
              settle for ordinary when you can live extraordinary?"
            </h2>
          </div>
          <Image
            width={677} height={1084} layout="responsive"
            className="w-full h-full object-cover object-center "
            src="/Header-Background.png"
            alt="Header patter"
          />
        </div>
        <div className="w-[91.5%] 450:block hidden ml-auto ">
          <Image width={1755} height={1077} layout="responsive" src="/header-image.png" alt="home" className=" object-cover" />
        </div>

        <Image
        width={450} height={600} layout="responsive"
          src="https://images.unsplash.com/photo-1739999373818-ab59c32b23c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
          alt="home"
          className="w-full 450:hidden block ml-auto h-full object-cover"
        />
      </div>
      <div className="tagline text-center bg-creamBg h-full text-themeText pb-4 pt-[30%] 450:py-6 lg:text-3xl sm:text-2xl relative 450:text-xl text-lg font-cinzel">
        <div className="w-[85%] absolute left-[50%] 450:hidden -translate-x-[50%] -top-[50%] h-full m-auto top-0 z-[10]">
          <div className="leading-relaxed p-4 bg-greenTheme">
            <h1 className="text-mainText text-[4.5vw]">
              Where vision meets reality and dreams find their address
            </h1>
            <h2 className="text-white text-[3.5vw]">
              This isn't just real estate: it's a philosophy.One that asks, "Why
              settle for ordinary when you can live extraordinary?"
            </h2>
          </div>
        </div>
        <h1>This isn't just a home</h1>
        <h1>It's a story Woven in nature!</h1>
      </div>
      <ViewContainer items={items} />
    </section>
  );
};

export default Homepage;
