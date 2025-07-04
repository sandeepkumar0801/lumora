import Header from "@/components/Header";
import { EnquiryFormContext } from "@/context/EnquiryFormContext";
import Footer from "@/sections/Footer";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";

const ProductPage = () => {
  const { openPopup } = useContext(EnquiryFormContext);

  const bannerImages = [
    "/product1.jpg",
    "/product2.jpg",
    "/product3.jpg",
    "/product8.jpg",
    "/product5.jpg",
    "/product10.jpg",
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
        <title>Lumora - Our Products</title>
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
              height={1080} // Adjust based on actual aspect ratio
              layout="responsive"
              objectFit="cover"
              sizes="100vw"
              priority={index < 3}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
