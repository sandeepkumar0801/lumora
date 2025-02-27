import Header from "@/components/Header";
import { EnquiryFormContext } from "@/context/EnquiryFormContext";
import Footer from "@/sections/Footer";
import Image from "next/image";
import { useContext } from "react";

const AboutUs = () => {
  const { openPopup } = useContext(EnquiryFormContext);
  return (
    <>
      <Header lgScreen="lg:w-full" />
      <div className="relative">
        {/* Image */}
        <div className="450:hidden overflow-hidden h-[500px]">
          <Image
            src="/aboutBannerMob.png"
            alt="aboutBanner"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Image for large screens (above 450px) */}
        <div className="hidden overflow-hidden h-[500px] 450:block">
          <Image
            src="/aboutBanner.png"
            alt="aboutBanner"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e291a] to-transparent opacity-50"></div>
      </div>
      <section className="bg-mainText pt-12 pb-6 sm:px-6 lg:px-8 px-3">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl text-greenTheme sm:text-5xl">About Us</h2>
            <p className="mt-4 text-lg font-athena text-black">
              We are dedicated to providing exceptional real estate solutions
              tailored to your needs.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <picture>
                {/* Image for small screens (up to 450px) */}
                <source
                  media="(max-width: 450px)"
                  srcSet="/aboutMob.png"
                />
                {/* Image for large screens (above 450px) */}
                <source
                  media="(min-width: 451px)"
                  srcSet="/aboutDesktop.png"
                />
                {/* Fallback image */}
                <Image
                  src="/aboutDesktop.png"
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl animate-scale-infinite"
                />
              </picture>
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <h3 className="text-3xl text-greenTheme">Who We Are</h3>
              <p className="text-lg text-black">
                Welcome to Lumora Estates, where passion meets purpose. Founded
                in 2024, we have swiftly become a trailblazer in the real estate
                sector, transforming challenges into opportunities and turning
                ideas into impactful solutions. As a trusted partner, we drive
                success for our clients through innovation, commitment, and a
                customer-first approach.
              </p>
              <p className="text-lg text-black">
                At the core of our organization is a dynamic team of
                professionals who bring their expertise, creativity, and
                dedication to every project. Together, we strive to make a
                lasting impact, ensuring excellence in all aspects of our
                business.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={openPopup}
                  className="px-6 py-3 bg-greenTheme text-mainText hover:bg-[#1a3d2b] font-semibold rounded-md transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        {/* First Row: Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-greenTheme">
              Our Mission
            </h2>
            <p className="text-gray-700 text-center">
              Our mission is to set the benchmark for excellence in real estate
              by designing spaces that blend luxury, functionality, and
              environmental stewardship. We are committed to delivering top-tier
              real estate solutions and embracing cutting-edge technology to
              make a meaningful difference.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-greenTheme">
              Our Vision
            </h2>
            <p className="text-gray-700 text-center">
              To become a recognized leader in the real estate sector by setting
              new standards for quality and innovation, while building lasting
              relationships with clients and communities.
            </p>
          </div>
        </div>

        {/* Second Row: Core Values and Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Values */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-greenTheme">
              Core Values
            </h2>
            <ul className="space-y-4 text-gray-700 font-athena">
              <li className="font-athena">
                <strong>Customer Centricity:</strong> Our customers are at the
                heart of everything we do.
              </li>
              <li className="font-athena">
                <strong>Innovation:</strong> We embrace creativity to stay ahead
                of the curve.
              </li>
              <li className="font-athena">
                <strong>Integrity:</strong> Honesty and transparency define our
                work ethic.
              </li>
              <li className="font-athena">
                <strong>Sustainability:</strong> We are dedicated to building a
                greener, more sustainable future.
              </li>
              <li className="font-athena">
                <strong>Teamwork:</strong> Collaboration is key to our success.
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-greenTheme">
              Our Expertise
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="font-athena">
                <strong>Eco-Luxury Retreats:</strong> Sustainable, boutique
                properties in scenic locations.
              </li>
              <li className="font-athena">
                <strong>Smart City Development:</strong> Future-ready urban
                communities with IoT and green solutions.
              </li>
              <li className="font-athena">
                <strong>Pop-Up Spaces:</strong> Short-term rentals for events
                and retail experiments.
              </li>
              <li className="font-athena">
                <strong>Wellness Real Estate:</strong> Homes designed for
                wellness, featuring meditation spaces, air purifiers, and
                biophilic designs.
              </li>
              <li className="font-athena">
                <strong>Adaptive Reuse:</strong> Transforming old buildings into
                modern, vibrant spaces.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
