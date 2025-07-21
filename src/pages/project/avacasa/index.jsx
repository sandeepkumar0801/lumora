import BrochureFloatingButton from "@/components/BrochureFloatingButton";
import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import Head from "next/head";
import Image from "next/image"
import { BrochureFormContext } from "@/context/BrochureFormContext";
import { useContext } from "react";

const ProductPage = () => {
  const { openBrochurePopup } = useContext(BrochureFormContext);
  const bannerImages = [
    "/product1.jpg",
    "/product2.jpg",
    "/product3.jpg",
    "/product8.jpg",
    "/product5.jpg",
    "/product10.jpg",
    "/product21.jpg",
    "/product7.jpg",
    "/product4.jpg",
    "/product9.jpg",
    "/product6.jpg",
    "/product11.jpg",
    "/product12.jpg",
    "/product13.jpg",
    "/product15.jpg",
    "/product14.jpg",
    "/product16.jpg",
    "/product17.jpg",
    "/product19.jpg",
    "/product18.jpg",
    "/product20.jpg",
  ];

  return (
    <>
      <Head>
        <title>Lumora - Project Avacasa</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header lgScreen="lg:w-full" bgHeader="bg-greenTheme" />

      {/* Image list with responsive layout */}
      <div className="w-full pt-4">
        {bannerImages.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={image}
              alt={`Product banner ${index + 1}`}
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="cover"
              sizes="100vw"
              priority={index < 3}
              className="w-full"
            />

            {index === 1 && (
              <div className="w-full bg-greenTheme py-8 relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0">
                  <div className="absolute w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_30%,_#0e291a_70%)]"></div>
                  </div>
                  <div className="absolute w-full h-full opacity-10">
                    <div className="hexagon-grid"></div>
                  </div>
                </div>

                {/* Animated light rays */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 -left-1/4 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-mainText/10 to-transparent transform -rotate-45 animate-beam"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 left-8 w-8 h-8 border border-mainText/20 rotate-45 animate-float-slow"></div>
                <div className="absolute bottom-4 right-8 w-8 h-8 border border-mainText/20 rotate-45 animate-float-slow delay-500"></div>

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-mainText/40 animate-expand-right"></div>
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-mainText/40 animate-expand-down"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-mainText/40 animate-expand-left"></div>
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-mainText/40 animate-expand-up"></div>
                </div>

                {/* Main content container */}
                <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                  {/* Left side with decorative elements */}
                  <div className="md:w-1/2 flex items-center">
                    <div className="hidden md:block w-16 h-16 mr-6 relative">
                      <div className="w-full h-full rounded-full border-2 border-mainText flex items-center justify-center overflow-hidden">
                        <div className="w-10 h-10 rounded-full bg-mainText/20 animate-pulse"></div>
                        <div className="absolute inset-0 border-2 border-transparent rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-0 border-2 border-dashed border-mainText/30 rounded-full animate-reverse-spin"></div>
                      </div>
                      <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full border border-mainText/40"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full border border-mainText/40"></div>
                    </div>

                    <div className="text-center md:text-left relative">
                      <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-poppins relative inline-block">
                        Exclusive Collection
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-mainText/0 via-mainText/50 to-mainText/0"></span>
                      </span>
                      <h2 className="text-3xl md:text-4xl text-mainText font-cinzel tracking-wider mt-1 relative">
                        Luxury Brochure
                        <span className="absolute -left-4 top-1/2 w-2 h-2 bg-mainText/50 rounded-full transform -translate-y-1/2"></span>
                      </h2>
                    </div>
                  </div>

                  {/* Right side with button */}
                  <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
                    <button
                      className="inline-block align-middle px-6 py-2 bg-transparent border border-mainText text-mainText font-cinzel 
                      hover:bg-mainText hover:text-white transition-all duration-300 
                      relative group overflow-hidden"
                      onClick={openBrochurePopup}
                    >
                      <span className="relative z-10 text-sm tracking-wider flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        DOWNLOAD NOW
                      </span>
                      <span className="absolute inset-0 bg-mainText transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-45 translate-x-full group-hover:translate-x-[-180%] transition-transform duration-1000"></span>
                      </span>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-mainText opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-mainText opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-mainText opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-mainText opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
