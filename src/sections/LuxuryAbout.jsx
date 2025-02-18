import Image from "next/image";
import React from "react";

const LuxuryAbout = () => {
  return (
    <>
      <section className="py-16">
        <div className="flex flex-wrap gap-24 justify-center 1050:justify-normal items-center">
          <div className="img xl:w-[510px] sm:w-[480px] relative sm:h-[480px] w-[300px] h-[300px] xl:h-[510px] after:content-[''] after:absolute after:bg-[#0e291a] after:-top-[20px] sm:after:left-[122px] after:left-[80px] after:w-[80%] after:h-[80%] after:z-[-1]">
            <Image
              fill
              sizes="510px"
              className="w-full h-full object-cover"
              src="/Luxury-retreat.png"
              alt="luxury-about"
            />
          </div>
          <div className="content xl:w-[510px] w-[475px] -translate-y-8 sm:px-0 px-4">
            <h1 className="lg:text-4xl text-3xl text-start text-themeText">Lumora Estates</h1>
            <h1 className="lg:text-4xl text-3xl text-start text-themeText">The luxury retreat</h1>
            <p className="py-8 w-[80%] leading-normal">
              Welcome to Lumora Estates, where passion meets purpose.
              <br /> Founded in 2024, we have swiftly become a trailblazer in
              the real estate sector, transforming challenges into opportunities
              and turning ideas into impactful solutions. As a trusted partner,
              we drive success for our clients through innovation, commitment,
              and a customer-first approach.
            </p>
            <p className=" w-[80%] leading-normal">
              At the core of our organization is a dynamic team of professionals
              who bring their expertise, creativity, and dedication to every
              project. Together, we strive to make a lasting impact, ensuring
              excellence in all aspects of our business.
            </p>
          </div>
        </div>
      </section>
      <div className="schedule-visit w-full relative py-6 flex flex-col gap-6 items-center">
        <Image fill sizes="100vw" className="absolute w-full -z-10 h-full top-0 left-0" src="/Golden-pattern.png" alt="golden-pattern" />
        <h2 className="lg:text-4xl text-white font-normal">Schedule a visit</h2>
        <p className="w-[50%] text-center text-white leading-normal">
          Getting started on your home-buying journey can be overwhelming & can
          deter you from taking the first step
        </p>
        <button className="py-2 px-5 bg-white font-cinzel sm:text-xl">
          Take the first step
        </button>
      </div>
    </>
  );
};

export default LuxuryAbout;
