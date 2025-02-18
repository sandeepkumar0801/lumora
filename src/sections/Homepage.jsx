import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

const ViewContainer = ({ items }) => {
  return (
    <div className="view-container lg:w-full md:w-[90%] lg:pt-0 pt-5 m-auto flex lg:gap-0 gap-5 flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="relative view-box lg:w-[25%] md:w-[48%] w-[80%] sm:min-w-[252px] min-w-[300px] m-auto sm:h-[90vh] h-[80vh]">
          <Image fill sizes="20vw" src={item.image} alt={item.alt} className="w-full h-full object-cover" />

          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="flex items-center space-x-2">
              <h2 className="text-white text-xl -translate-y-[50px]">{item.title}</h2>
            </div>
          </div>

          <div className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px]">
            <Image fill sizes="5vw" src={item.icon} alt="Icon" className="w-full h-full object-cover" />
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
      icon: "/Nature-icon.png"
    },
    {
      image: "/Panaromic-view.png",
      alt: "panoramic-view-img",
      title: "Panoramic mountain view",
      icon: "/Panaromic-icon.png"
    },
    {
      image: "/Resort-living.png",
      alt: "resort-living-img",
      title: "Resort living",
      icon: "/Resort-living-icon.png"
    },
    {
      image: "/Zen-garden.png",
      alt: "zen-garden-img",
      title: "Zen garden",
      icon: "/Zen-garden-icon.png"
    }
  ];

  return (
    <section className="w-full">
      <div className="bg-greenTheme w-full relative">
        <Header />
        <img src="/header-image.png" alt="home" className="w-[91.5%] ml-auto h-full object-cover" />
      </div>
      <div className="tagline text-center bg-creamBg text-themeText py-8 lg:text-3xl  sm:text-2xl text-xl font-cinzel">
        <h1>This isn't just a home</h1>
        <h1>It's a story Woven in nature!</h1>
      </div>
      <ViewContainer items={items} />
    </section>
  );
};

export default Homepage;
