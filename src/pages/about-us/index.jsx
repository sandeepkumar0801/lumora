import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
    <Header lgScreen="w-full" />
    <section className="bg-[#0e291a] pb-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#cc9a64] sm:text-5xl">About Us</h2>
          <p className="mt-4 text-lg font-athena text-gray-300">
            We are dedicated to providing exceptional real estate solutions
            tailored to your needs.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1739382120665-fa6bcf8b7833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-xl animate-scale-infinite"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-3xl  text-[#cc9a64]">Who We Are</h3>
            <p className="text-lg text-gray-300">
              We are a team of passionate real estate professionals committed to
              helping you find your dream home. With years of experience in the
              industry, we provide personalized services to meet your unique
              needs.
            </p>
            <p className="text-lg text-gray-300">
              Our mission is to make the process of buying, selling, or renting
              properties seamless and stress-free. We believe in building
              long-term relationships with our clients by delivering exceptional
              results.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-[#cc9a64] text-[#0e291a] font-semibold rounded-md hover:bg-[#b88653] transition-colors">
                Learn More
              </button>
              <button className="px-6 py-3 border border-[#cc9a64] text-[#cc9a64] font-semibold rounded-md hover:bg-[#cc9a64] hover:text-[#0e291a] transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-normal text-[#cc9a64] text-center mb-8">
            Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlYW18ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                width={400}
                height={500}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay (Bottom Only) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14, 41, 26, 0.8) 0%, transparent 50%)", // Using theme color #0e291a
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-2xl font-bold text-white">John Doe</h4>
                <p className="text-gray-200">Real Estate Agent</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW18ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                width={400}
                height={500}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay (Bottom Only) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14, 41, 26, 0.8) 0%, transparent 50%)", // Using theme color #0e291a
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-2xl font-bold text-white">John Doe</h4>
                <p className="text-gray-200">Real Estate Agent</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlYW18ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                width={400}
                height={500}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay (Bottom Only) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14, 41, 26, 0.8) 0%, transparent 50%)", // Using theme color #0e291a
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-2xl font-bold text-white">John Doe</h4>
                <p className="text-gray-200">Real Estate Agent</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW18ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                width={400}
                height={500}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay (Bottom Only) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14, 41, 26, 0.8) 0%, transparent 50%)", // Using theme color #0e291a
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h4 className="text-2xl font-bold text-white">John Doe</h4>
                <p className="text-gray-200">Real Estate Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default AboutUs;
