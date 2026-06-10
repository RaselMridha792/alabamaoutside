import AboutLawFirm from "@/components/home/AboutLawFirm";
import ContactUs from "@/components/home/Contact";
import FeaturedIn from "@/components/home/FeaturedIn";
import Hero from "@/components/home/Hero";
import LatestUpdates from "@/components/home/LatestUpdates";
import PracticeSection from "@/components/home/PracticeSection";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
   <Hero></Hero>
   <AboutLawFirm></AboutLawFirm>
   <PracticeSection></PracticeSection>
   <LatestUpdates></LatestUpdates>
   <FeaturedIn></FeaturedIn>
   <ContactUs></ContactUs>
   </div>
  );
}
