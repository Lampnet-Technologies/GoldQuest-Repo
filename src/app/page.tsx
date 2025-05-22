import GetHelp from "@/components/Home/GetHelp";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import Testimonials from "@/components/Home/Testimonials";
import WorthOfBusiness from "@/components/Home/WorthOfBusiness";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import Video from "@/components/Home/Video";
import LatestArticle from "@/components/Home/LatestArticle";



export default function Home() {
  return (
    <div className="">
      <HomeHeroSection/>
      <WorthOfBusiness/>
      <GetHelp/>
      <WhatWeOffer/>
      <Video/>
      <LatestArticle/>
      <Testimonials/>
    </div>
  );
}
