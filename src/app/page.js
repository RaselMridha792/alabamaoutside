// import AboutLawFirm from "@/components/home/AboutLawFirm";
import AboutLawFirm from "@/components/home/AboutLawFirm";
import Accreditations from "@/components/home/Accreditations";
import ContactUs from "@/components/home/Contact";
import FeaturedIn from "@/components/home/FeaturedIn";
import Hero from "@/components/home/Hero";
import LatestUpdates from "@/components/home/LatestUpdates";
import OurTeam from "@/components/home/OurTeam";
import WhyOurFirm from "@/components/home/WhyOurFirm";
import FAQ from "@/components/home/FAQ";
// import LatestUpdates from "@/components/home/LatestUpdates";
import PracticeSection from "@/components/home/PracticeSection";
import OurProcess from "@/components/home/OurProcess";
import Image from "next/image";
import ClientReviews from "@/components/home/ClientReviews";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      
      <AboutLawFirm></AboutLawFirm>
      <FeaturedIn></FeaturedIn>

     <PracticeSection></PracticeSection>

      <OurTeam></OurTeam>
      <OurProcess></OurProcess>
      <ClientReviews></ClientReviews>
      <WhyOurFirm></WhyOurFirm>


          <LatestUpdates></LatestUpdates>
      {/* <LatestUpdates></LatestUpdates> */}

<Accreditations></Accreditations>

      <FAQ></FAQ>
      <ContactUs></ContactUs>
    </div>
  );
}
