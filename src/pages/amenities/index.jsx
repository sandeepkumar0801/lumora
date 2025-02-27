import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";

const Amenities = () => {
  const amenities = [
    {
      title: "Swimming Pool",
      image:
        "https://images.unsplash.com/photo-1740338247288-131cc995f74f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Fitness Center",
      image:
        "https://images.unsplash.com/photo-1740386072835-938733c974e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Rooftop Lounge",
      image:
        "https://images.unsplash.com/photo-1740341459122-cc16499650bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjR8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Parking Space",
      image:
        "https://images.unsplash.com/photo-1737467016100-68cd7759d93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "24/7 Security",
      image:
        "https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Kids Play Area",
      image:
        "https://plus.unsplash.com/premium_photo-1700486006740-6020a71f2d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Community Garden",
      image:
        "https://images.unsplash.com/photo-1734692817970-0dde7ba300e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Co-Working Space",
      image:
        "https://images.unsplash.com/photo-1740137660835-8a755519b9ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Pet-Friendly Zone",
      image:
        "https://images.unsplash.com/photo-1740166260067-9338269b9227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjN8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Yoga Studio",
      image:
        "https://images.unsplash.com/photo-1734692817970-0dde7ba300e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Café & Bistro",
      image:
        "https://plus.unsplash.com/premium_photo-1700486006740-6020a71f2d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Concierge Service",
      image:
        "https://images.unsplash.com/photo-1740338247288-131cc995f74f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Movie Theater",
      image:
        "https://plus.unsplash.com/premium_photo-1700486006740-6020a71f2d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "BBQ Area",
      image:
        "https://images.unsplash.com/photo-1740338247288-131cc995f74f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Spa & Sauna",
      image:
        "https://images.unsplash.com/photo-1740338247288-131cc995f74f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Tennis Court",
      image:
        "https://images.unsplash.com/photo-1740137660835-8a755519b9ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Basketball Court",
      image:
        "https://images.unsplash.com/photo-1734692817970-0dde7ba300e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Walking Trails",
      image:
        "https://images.unsplash.com/photo-1740137660835-8a755519b9ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D",
    },
    {
      title: "Walking Trails",
      image:
        "https://images.unsplash.com/photo-1740137660835-8a755519b9ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D",
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
