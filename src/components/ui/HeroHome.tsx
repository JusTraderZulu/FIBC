'use client';

import Image from "next/image";
import { Container } from "./Container";
import { SITE } from "@/lib/site";

export function HeroHome() {
  const bg = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3";
  
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          alt="Sanctuary background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand))]/85 via-[hsl(var(--brand))]/80 to-[hsl(var(--brand))]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
      </div>

      <Container>
        <div className="relative py-20 text-white">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Title First - Bold & Elegant */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-8 animate-[fadeInDown_0.8s_ease-out]">
              <span className="block bg-gradient-to-b from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-lg">
                Faith International Baptist
              </span>
              <span className="block bg-gradient-to-r from-white via-[hsl(var(--accent))] to-white bg-clip-text text-transparent mt-2 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                Convention Inc.
              </span>
            </h1>

            {/* Animated Seal with Enhanced Glow */}
            <div className="mb-6 animate-[scaleIn_1s_ease-out_0.3s_both]">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[hsl(var(--accent))]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/fibc-seal.png"
                    alt="Faith International Baptist Convention Inc. Official Seal"
                    width={180}
                    height={180}
                    className="mx-auto drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--accent))]/0 group-hover:border-[hsl(var(--accent))]/30 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Animated Badge Below Seal */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg animate-[fadeIn_1s_ease-out_0.6s_both]">
              <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-white/90">Est. October 4, 1995</span>
              <div className="w-px h-4 bg-white/20"></div>
              <span className="text-sm font-medium text-white/70">30 Years Strong</span>
            </div>
            
            {/* Animated Tagline */}
            <div className="mb-10 animate-[fadeIn_1.2s_ease-out_0.6s_both]">
              <div className="relative inline-block">
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent))]/40 to-white/30 animate-[expandRight_1s_ease-out_0.8s_both]"></div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 h-px bg-gradient-to-l from-transparent via-[hsl(var(--accent))]/40 to-white/30 animate-[expandLeft_1s_ease-out_0.8s_both]"></div>
                <p className="text-xl sm:text-2xl text-white/95 font-light italic px-12">
                  A Community Dedicated to Seeking God
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
                <div className="flex items-center gap-2 animate-[fadeIn_0.6s_ease-out_1s_both]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Trinidad & Tobago</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-white/40 animate-pulse"></span>
                <div className="flex items-center gap-2 animate-[fadeIn_0.6s_ease-out_1.1s_both]">
                  <span className="inline-block animate-spin-slow">🌍</span>
                  <span>Worldwide Fellowship</span>
                </div>
              </div>
            </div>

            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeInUp_0.8s_ease-out_1s_both]">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-[hsl(var(--accent))] text-black px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <span>Plan Your Visit</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/about"
                className="group inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 text-lg font-semibold hover:bg-white/20 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <span>Explore Our Story</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Animated Scroll Hint */}
            <div className="mt-12 animate-bounce">
              <div className="inline-flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-xs uppercase tracking-wider text-white/60">Scroll to explore</span>
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes expandRight {
          from {
            width: 0;
          }
          to {
            width: 3rem;
          }
        }
        @keyframes expandLeft {
          from {
            width: 0;
          }
          to {
            width: 3rem;
          }
        }
        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}


