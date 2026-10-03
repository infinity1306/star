'use client';

import CanvasLoader from "./components/common/CanvasLoader";
import ScrollWrapper from "./components/common/ScrollWrapper";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";

import FounderOverlay from "./components/founder";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="fixed top-6 left-6 z-[60] pointer-events-none mix-blend-screen opacity-90">
        <Image 
          src="/logo.png" 
          alt="StarChain Labs Logo" 
          width={150} 
          height={50} 
          className="object-contain"
          unoptimized
        />
      </div>
      <CanvasLoader>
        <ScrollWrapper>
          <Hero/>
          <Experience/>
          <Footer/>
        </ScrollWrapper>
      </CanvasLoader>
      <FounderOverlay />
    </>
  );
};
export default Home;
