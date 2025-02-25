import Image from "next/image";

// Each grid array should contain 12 objects with unique data
const sections1 = [
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Adventure_sport.jpg",
    alt: "Adventure_Sports_img",
  },
  {
    theme: "bg-greenTheme font-semibold text-white",
    image:
      "",
    text: "Adventure Sports",
  },
  {
    theme: "bg-creamBg font-semibold",
    image:
      "",
    text: "Business Lounge",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "/business_Lounge.jpg",
    alt: "Business_Lounge_Img",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Clubhouse.jpg",
    alt: "Clubhouse_Img",
  },
  {
    theme: "bg-greenTheme font-semibold text-white",
    image:
      "",
    text: "Clubhouse",
  },
];

const sections2 = [
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Hotel_Villas.jpg",
    alt: "Hotel_Villas_img",
  },
  {
    theme: "bg-greenTheme font-semibold text-white",
    image:
      "",
    text: "Hotel Villas",
  },
  {
    theme: "bg-creamBg font-semibold",
    image:
      "",
    text: "Pet Space",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Pet_Spaces.jpg",
    alt: "Pet_space_img",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Resort_Shopping.jpg",
    alt: "Resort_Shopping_Img",
  },
  {
    theme: "bg-greenTheme font-semibold text-white",
    image:
      "",
    text: "Resort Shopping",
  },
];

const sections3 = [
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Infinity_pool.jpg",
    alt: "Infinity_Pool_Img",
  },
  {
    theme: "bg-greenTheme font-semibold text-white",
    image:
      "",
    text: "Infinity Pool",
  },
  {
    theme: "bg-creamBg font-semibold",
    image:
      "",
    text: "Gym",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Gym.jpg",
    alt: "Gym_Img",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "/Green_Landscapes.jpg",
    alt: "Green_Landscapes_Img",
  },
  {
    theme: "bg-greenTheme font-semibold text-white",
    image:
      "",
    text: "Green Landscapes",
  },
];

const GridSection = ({ sections }) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 sm:w-full w-full flex flex-wrap">
      {sections.map((section, index) => (
        <div key={index} className="w-[50%] aspect-[4/3]">
          {index % 4 === 0 || index % 4 === 3 ? (
            <div className="w-full h-full">
              <Image
                width={150}
                height={160}
                src={section.image}
                alt={section.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              className={`w-full h-full ${section.theme} flex items-center justify-center`}
            >
              <p className="w-[45%] text-center">{section.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Amenities = () => {
  return (
    <section className="pt-12">
      <h1 className="text-4xl text-themeText text-center">Amenities</h1>
      <h3 className="text-lg pt-2 pb-8 font-athena font-semibold text-center">
        Dwell into a remarkable location
      </h3>

      <div className="w-full flex flex-wrap justify-center">
        {/* For large screens (lg and above): 3 parent sections */}
        <div className="lg:flex hidden">
          <GridSection sections={sections1} />
          <GridSection sections={sections2} />
          <GridSection sections={sections3} />
        </div>

        {/* For medium screens (above sm but below lg): 2 parent sections */}
        <div className="sm:flex lg:hidden hidden">
          <GridSection sections={sections1} />
          <GridSection sections={sections2} />
        </div>

        {/* For small screens (sm and below): 1 parent section */}
        <div className="450:flex sm:hidden">
          <GridSection sections={sections1} />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
