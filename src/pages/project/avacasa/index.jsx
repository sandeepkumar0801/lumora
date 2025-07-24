import BrochureFloatingButton from "@/components/BrochureFloatingButton";
import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import Head from "next/head";
import Image from "next/image";
import { BrochureFormContext } from "@/context/BrochureFormContext";
import { useContext, useState } from "react";
import Amenities from "@/sections/Amenities";

const ProductPage = () => {
  const { openBrochurePopup } = useContext(BrochureFormContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('exterior');

  const galleryImages = {
    exterior: [
      {
        src: "/foggy-mountainous-scenery-gloomy-sky.jpg",
        alt: "Foggy Mountainous Scenery",
        title: "Misty Mountains"
      },
      {
        src: "/VIEW_002_ENTRANCE_AREA_VIEW_TWILIGHT_2025.06.20_HIRES.jpg",
        alt: "Entrance Area Twilight View",
        title: "Grand Entrance"
      },
      {
        src: "/VILLA_BACKYARD_VIEW_005_TWILIGHT_2025.06.20_HIRES.jpg",
        alt: "Villa Backyard Twilight View",
        title: "Backyard Serenity"
      },
      {
        src: "/VILLA_ELEVATION_VIEW_001_DAY_2025.06.20_HIRES.jpg",
        alt: "Villa Elevation Day View",
        title: "Villa Elevation"
      },
      {
        src: "/small-serene-living-space-adorned-with-thriving-plants.jpg",
        alt: "Serene Living Space with Plants",
        title: "Nature Integration"
      },
      {
        src: "/backpacker-tree-trunk.jpg",
        alt: "Natural Tree Trunk Setting",
        title: "Natural Surroundings"
      }
    ],
    interior: [
      {
        src: "/LIVING_DINING_CAM-01_2025.07.10.jpg",
        alt: "Living Dining Area",
        title: "Living & Dining"
      },
      {
        src: "/KITCHEN_DINING_CAM_2025.07.10.jpg",
        alt: "Kitchen Dining Area",
        title: "Modern Kitchen"
      },
      {
        src: "/GROUND_FLOOR_BEDROOM_01_2025.07.10.jpg",
        alt: "Ground Floor Bedroom",
        title: "Master Bedroom"
      },
      {
        src: "/GROUND_FLOOR_TOILET_2025.07.10.jpg",
        alt: "Ground Floor Bathroom",
        title: "Luxury Bathroom"
      },
      {
        src: "/FIRST_FLOOR_TOILET_CAM_01_2025.07.10.jpg",
        alt: "First Floor Bathroom",
        title: "Premium Washroom"
      },
      {
        src: "/FIRST_FLOOR_BEDROOM_02_2025.07.10.jpg",
        alt: "First Floor Bedroom",
        title: "First Floor Bedroom"
      }
    ]
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Lumora - Project Avacasa</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header lgScreen="lg:w-full" bgHeader="bg-greenTheme" />

      {/* Banner Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hanging-ferns.jpg"
          alt="Avacasa Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-20">
          {/* Project Logo/Name */}
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Avacasa Project"
              width={300}
              height={83}
              className="w-auto h-auto max-w-[300px] sm:max-w-[400px]"
            />
          </div>
          
          {/* Tagline */}
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cinzel mb-2">
            Nature Living in Nature
          </h1>
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-athena mb-8">
            at Shivalik Foothills
          </p>
          
          {/* CTA Button */}
          <button
            onClick={openBrochurePopup}
            className="px-8 py-3 bg-mainText text-white font-cinzel text-lg hover:bg-mainText/90 transition-all duration-300 relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
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
              Download Brochure
            </span>
          </button>
        </div>
      </div>

      {/* Quick Facts Panel */}
      <section className="bg-[#0e291a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-[#cc9a64] font-cinzel mb-4">
              Quick Facts
            </h2>
            <div className="w-24 h-1 bg-mainText mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Project Status",
                value: "Under Construction",
                highlight: true
              },
              {
                title: "Configuration",
                value: "3 BHK Villa"
              },
              {
                title: "Price Range",
                value: "Price on Request"
              },
              {
                title: "Location",
                value: "Badkala Hills"
              },
              {
                title: "Area",
                value: "2,531 sq. ft"
              },
              {
                title: "Possession Date",
                value: "As per schedule"
              },
              {
                title: "Total Towers",
                value: "9"
              },
              {
                title: "Total Floors",
                value: "28-33"
              },
              {
                title: "Total Units",
                value: "528"
              },
              {
                title: "Living Style",
                value: "Low Density Living",
                highlight: true
              }
            ].map((fact, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center ${
                  fact.highlight ? 'border-2 border-mainText' : ''
                }`}
              >
                <h4 className="font-cinzel text-themeText font-semibold text-lg mb-3 min-h-[3rem] flex items-center justify-center">
                  {fact.title}
                </h4>
                <p className={`font-poppins text-base ${
                  fact.highlight ? 'text-mainText font-semibold' : 'text-gray-600'
                }`}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="bg-creamBg py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-themeText font-cinzel mb-6">
              Project Overview
            </h2>
            <div className="w-24 h-1 bg-mainText mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 font-poppins">
                Nestled in the serene Shivalik Foothills, Avacasa represents the perfect harmony between modern luxury and natural tranquility. This thoughtfully designed residential project offers an escape from urban chaos while maintaining seamless connectivity to essential amenities. Every home is crafted with meticulous attention to detail, ensuring residents experience the finest in contemporary living amidst nature's embrace.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-poppins">
                Experience a lifestyle where morning mist meets modern comfort, where ancient wisdom of Vastu meets contemporary architecture, and where every sunset paints a new story of peaceful living.
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-cinzel text-themeText mb-6 text-center">
                Key Highlights
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "",
                    title: "Prime Location",
                    desc: "Strategic location in Shivalik Foothills with excellent connectivity"
                  },
                  {
                    icon: "",
                    title: "Vastu Compliant",
                    desc: "Designed according to ancient Vastu principles for positive energy"
                  },
                  {
                    icon: "",
                    title: "Close to Metro/Schools",
                    desc: "Easy access to metro stations and premium educational institutions"
                  },
                  {
                    icon: "",
                    title: "Green Spaces",
                    desc: "Abundant landscaped gardens and nature trails throughout"
                  },
                  {
                    icon: "",
                    title: "Builder Reputation",
                    desc: "Developed by Lumora Estates - trusted name in sustainable luxury"
                  }
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-creamBg/50 transition-colors">
                    <span className="text-2xl">{highlight.icon}</span>
                    <div>
                      <h4 className="font-cinzel text-themeText font-semibold">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 text-sm font-poppins">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image/Media Gallery Section */}
      <section className="bg-[#0e291a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-[#cc9a64] font-cinzel mb-6">
              Visual Journey
            </h2>
            <p className="text-lg font-athena text-gray-300 max-w-2xl mx-auto">
              Explore the architectural excellence and natural beauty that defines Avacasa
            </p>
            <div className="w-24 h-1 bg-[#cc9a64] mx-auto mt-6"></div>
          </div>

          {/* Gallery Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-1 backdrop-blur-sm">
              {[
                { key: 'exterior', label: 'Exterior Views' },
                { key: 'interior', label: 'Interior Spaces' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-md font-cinzel transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-[#cc9a64] text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages[activeTab].map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zm4.5 8.5l-3-3-1.5 1.5-3-3V16h7.5z" clipRule="evenodd" />
                    </svg>
                    <p className="font-cinzel">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#cc9a64] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-cinzel text-xl">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
      {/* Project Configuration & Floor Plans */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-themeText font-cinzel mb-4">
              Project Configuration & Floor Plans
            </h2>
            <div className="w-24 h-1 bg-mainText mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Unit Types */}
            <div className="bg-creamBg rounded-xl p-8">
              <h3 className="text-2xl font-cinzel text-themeText mb-6 text-center">
                Unit Types with Area
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-mainText">
                  <div className="text-center">
                    <h4 className="text-xl font-cinzel text-themeText font-bold mb-2">3 BHK Villa</h4>
                    <p className="text-2xl font-poppins text-mainText font-bold">2,571 sq. ft.</p>
                    <p className="text-sm text-gray-600 font-poppins mt-2">Spacious luxury villa with premium amenities</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-mainText">
                  <div className="text-center">
                    <h4 className="text-xl font-cinzel text-themeText font-bold mb-2">3 BHK Villa</h4>
                    <p className="text-2xl font-poppins text-mainText font-bold">2,571 sq. ft.</p>
                    <p className="text-sm text-gray-600 font-poppins mt-2">Premium villa with modern design elements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Villa Features */}
            <div className="bg-greenTheme rounded-xl p-8 text-white">
              <h3 className="text-2xl font-cinzel mb-6 text-center">
                Villa Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Double-Height Living Room",
                  "Designer Open Kitchen with Extended Breakfast Counter",
                  "Three Spacious Bedrooms with Attached Bathrooms",
                  "Luxury Master Bathroom with Bathtub and Skylight",
                  "Private Plunge Pool",
                  "Outdoor Open-Air Shower",
                  "Manicured Front Lawn",
                  "Spacious Backyard Lawn",
                  "Kitchen Garden",
                  "Dedicated 2-Car Parking",
                  "Staff Room with Toilet",
                  "Rainwater Harvesting Pit"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <div className="w-2 h-2 bg-mainText rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-poppins text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <Amenities projectType="avacasa" />

      {/* Location & Connectivity */}
      <section className="bg-creamBg py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-themeText font-cinzel mb-4">
              Location & Connectivity
            </h2>
            <div className="w-24 h-1 bg-mainText mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">🗺️</div>
                  <p className="text-gray-500 font-poppins">Interactive Map</p>
                  <p className="text-sm text-gray-400 font-poppins mt-1">Badkala Hills Location</p>
                </div>
              </div>
            </div>

            {/* Distance Chart */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-cinzel text-themeText mb-6 text-center">
                Distance Chart
              </h3>
              <div className="space-y-4">
                {[
                  {
                    location: "Shakumbhari Devi Temple, Uttar Pradesh",
                    time: "10 min",
                    distance: "05 km"
                  },
                  {
                    location: "Hathni Kund Barrage, Haryana",
                    time: "35 mins",
                    distance: "30 km"
                  },
                  {
                    location: "Kalesar National Park",
                    time: "40 mins",
                    distance: "42.7 km"
                  },
                  {
                    location: "Rajaji National Park & Tiger Reserve (Mohand), Uttarakhand",
                    time: "45 mins",
                    distance: "31 km"
                  },
                  {
                    location: "Saharanpur Railway Station, Uttar Pradesh",
                    time: "1 hr",
                    distance: "43.4 km"
                  },
                  {
                    location: "Dehradun, Uttarakhand",
                    time: "1 hr 05 mins",
                    distance: "55.5 km"
                  },
                  {
                    location: "Paonta Sahib, Himachal Pradesh",
                    time: "1hr",
                    distance: "58.6 km"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h4 className="font-poppins text-sm font-medium text-themeText leading-tight">
                          {item.location}
                        </h4>
                      </div>
                      <div className="flex space-x-6 text-right">
                        <div>
                          <p className="text-xs text-gray-500 font-poppins">Time</p>
                          <p className="text-sm font-semibold text-mainText font-poppins">{item.time}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-poppins">Distance</p>
                          <p className="text-sm font-semibold text-mainText font-poppins">{item.distance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

      
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductPage;
