import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";

const Amenities = () => {
  const amenities = [
    {
      title: "Green and Clean Enviorment",
      image:
        "/Green_Clean.png",
    },
    {
      title: "Scenic Views",
      image:
        "/scenic_views.png",
    },
    {
      title: "Trekking",
      image:
        "/Trekking.png",
    },
    {
      title: "Tree Climbing",
      image:
        "/Tree_Climbing.png",
    },
    {
      title: "Pool Deck",
      image:
        "/pool_deck.png",
    },
    {
      title: "Basketball Court",
      image:
        "/Basketball_court.png",
    },
    {
      title: "Fruit Orchid",
      image:
        "/Fruit_Orchid.png",
    },
    {
      title: "Lawn",
      image:
        "/Lawn.png",
    },
    {
      title: "Lazy River",
      image:
        "/Lazy_river.png",
    },
    
  ];

  return (
    <>
      <Header lgScreen="lg:w-full" />
      <section className="bg-[#0e291a] pb-12 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#cc9a64] sm:text-5xl">
              Luxury Amenities
            </h2>
            <p className="mt-4 text-lg font-athena text-gray-300">
              Experience a lifestyle of comfort and convenience with our
              world-class amenities.
            </p>
          </div>

          {/* Masonry Grid Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="relative mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-black/20 " />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-normal text-white">
                    {amenity.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Amenities;
