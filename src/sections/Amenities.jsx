import Image from "next/image";

const sections = [
  { theme: "bg-greenTheme text-white", image: "https://images.unsplash.com/photo-1739705690223-0219a1f06a14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D", text: "Lush Mounded Lawn Garden" },
  { theme: "bg-creamBg text-black", image: "https://images.unsplash.com/photo-1736332654737-1224ed263915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D", text: "Floating Pavilion" },
  { theme: "bg-greenTheme text-white", image: "https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D", text: "Nature Walk & Cycle Trail" },
];

const GridSection = ({ theme, image, text }) => {
  return (
    <div className="w-1/3 min-w-[350px] flex flex-wrap">
      {Array(12).fill(null).map((_, index) => (
        <div key={index} className="w-[50%] h-[160px]">
          {index % 4 === 0 || index % 4 === 3 ? (
            <div className="w-full h-full img">
              <Image width={150} height={160} src={image} alt="Section Image" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className={`w-full h-full ${theme} text flex items-center justify-center`}>
              {<p className="w-[45%] text-center"> {text} </p>}
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
      
      <div className="amenities-container w-full flex flex-wrap justify-center">
      {sections.map((section, index) => (
        <GridSection key={index} theme={section.theme} image={section.image} text={section.text} />
      ))}
    </div>
 
    </section>
  );
};

export default Amenities;
