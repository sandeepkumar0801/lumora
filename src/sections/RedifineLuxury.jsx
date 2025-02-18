import Image from "next/image";
import React from "react";

const RedifineLuxury = () => {
  const paraContent = [
    "Acers of Resort Living",
    "Smart City Development",
    "Wellness Real Estate",
    "Quality and Innovation",
  ];
  return (
    <section className="">
      <div className="w-full flex flex-col items-center ">
        <h1 className="lg:text-4xl sm:text-3xl text-2xl text-themeText pt-[5rem] pb-[2rem] font-medium">
          Are you ready to redefine luxury?
        </h1>
        <p className="text-center w-[70%] sm:text-lg text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic alias
          tempore dicta in similique illum asperiores a aut, aliquam harum enim.
          Nisi repellat hic, quas itaque harum provident reiciendis! Enim.
        </p>
      </div>
      <div className="w-full relative pt-4">
        <div className="absolute z-10 left-[45%] w-[30%]">
        <Image
          width={334}
          height={334}
          className=" w-full "
          src="/Logo-circle.png"
          alt="redefine-logo"
        />
        </div>

        <Image
          width={1920}
          height={1120}
          src="/Redefine-luxury.png"
          alt="luxury-img"
          className="w-full object-cover relative z-20"
        />
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"></div>
      </div>
      <div className="flex flex-wrap w-full bg-creamBg justify-evenly">
        {paraContent.map((content, index) => (
          <div
            className="flex flex-col px-6 py-8 gap-4 items-center jusitify-center min-w-[300px]"
            key={index}
          >
            <h1 className="text-5xl font-semibold text-themeText">
              {index + 1}
            </h1>
            <h2 className="w-[60%] text-lg text-center font-semibold text-themeText">
              {content}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RedifineLuxury;
