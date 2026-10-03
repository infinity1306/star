'use client';

import { useFounderStore } from "@stores";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Image from "next/image";

const FounderOverlay = () => {
  const isOpen = useFounderStore((state) => state.isOpen);
  const closeFounder = useFounderStore((state) => state.closeFounder);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(containerRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.fromTo(contentRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  if (!isOpen) {
    // Keep it in DOM for animation but pointer-events-none when closed
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none invisible opacity-0'}`}
    >
      <div 
        ref={contentRef}
        className="w-full max-w-6xl max-h-full overflow-y-auto bg-[#111] rounded-2xl shadow-2xl border border-white/10 flex flex-col md:flex-row"
      >
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-full flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10 md:bg-gradient-to-r" />
          <Image 
            src="/founder.jpg" 
            alt="infinity1306it Pandey" 
            fill 
            unoptimized
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col relative z-20">
          <button 
            onClick={closeFounder}
            className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl transition-colors font-sans"
          >
            &times;
          </button>
          
          <h1 className="text-4xl md:text-6xl text-white font-serif mb-2 leading-none">
            infinity1306it Pandey
          </h1>
          <p className="text-xl text-[#b9c6d6] font-sans font-light mb-8 uppercase tracking-widest text-sm">
            MD & CTO, StarChain Labs
          </p>

          <div className="space-y-6 text-white/80 font-sans font-light leading-relaxed">
            <p className="text-2xl font-serif text-white italic leading-snug border-l-4 border-[#b9c6d6] pl-6 py-2 my-8">
              "To architect the decentralized backbone of tomorrow. At StarChain Labs, we aren't just writing code—we are engineering trust, transparency, and scalable digital realities. My vision is to completely blur the line between complex Web3 infrastructure and seamless user experiences, forging a future where decentralized technology empowers humanity without friction."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
              <div>
                <h3 className="text-white font-medium mb-1 uppercase text-xs tracking-wider">Background</h3>
                <p className="text-sm">Born: August 17, 2001</p>
                <p className="text-sm">Parents: Mr. Rajesh Pandey & Mrs. Renu Pandey</p>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-1 uppercase text-xs tracking-wider">Connect</h3>
                <div className="flex gap-4 text-sm">
                  <a href="https://www.linkedin.com/in/hptech017" target="_blank" rel="noopener noreferrer" className="hover:text-white text-[#b9c6d6] transition-colors underline underline-offset-4">LinkedIn</a>
                  <a href="https://instagram.com/hptech017" target="_blank" rel="noopener noreferrer" className="hover:text-white text-[#b9c6d6] transition-colors underline underline-offset-4">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderOverlay;
