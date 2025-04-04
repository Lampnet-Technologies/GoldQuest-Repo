import GetHelp from "@/components/Home/GetHelp";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import Testimonials from "@/components/Home/Testimonials";
import WorthOfBusiness from "@/components/Home/WorthOfBusiness";



export default function Home() {
  return (
    <div className="">
      <HomeHeroSection/>
      <WorthOfBusiness/>
      <GetHelp/>
      <Testimonials/>
    </div>
  );
}
