import Image from "next/image";

// Each grid array should contain 12 objects with unique data
const sections1 = [
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Majestic Mountains",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Sunflower Fields",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Dense Jungle",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Flowing River",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Autumn Leaves",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Dark Cave",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Rose Garden",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Tulip Fields",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Wild Savanna",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Blue Lagoon",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Cosmic Space",
  },
  {
    theme: "bg-greenTheme text-black",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Tropical Island",
  },
];

const sections2 = [
  {
    theme: "bg-creamBgcreamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Majestic Mountains",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Sunflower Fields",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Dense Jungle",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Flowing River",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Autumn Leaves",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Dark Cave",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Rose Garden",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Tulip Fields",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Wild Savanna",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Blue Lagoon",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Cosmic Space",
  },
  {
    theme: "bg-creamBg text-black",
    image: "https://images.unsplash.com/photo-1739312025707-bbf6765973b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "Tropical Island",
  },
];

const sections3 = [
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Majestic Mountains",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Sunflower Fields",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Dense Jungle",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Flowing River",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Autumn Leaves",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Dark Cave",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Rose Garden",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Tulip Fields",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Wild Savanna",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Blue Lagoon",
  },
  {
    theme: "bg-greenTheme text-white",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Cosmic Space",
  },
  {
    theme: "bg-greenTheme text-black",
    image:
      "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Tropical Island",
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
                alt="Section Image"
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
      <h3 className="text-lg pt-2 pb-8 font-semibold text-center">
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
