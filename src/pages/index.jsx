import Amenities from "@/sections/Amenities";
import Footer from "@/sections/Footer";
import Homepage from "@/sections/Homepage";
import LuxuryAbout from "@/sections/LuxuryAbout";
import Proximities from "@/sections/Proximities";
import RedifineLuxury from "@/sections/RedifineLuxury";
import Productpage from "@/sections/Productpage";
export default function Home() {
  return (
    <>
    <Homepage/>
    <RedifineLuxury/>
    <LuxuryAbout />
    < Amenities/>
    < Proximities/>
    < Productpage/>
    <Footer />
    </>
  );
}
