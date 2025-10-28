'use client';

import { useState, useEffect } from 'react';

export function SpinningGlobe() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Auto-rotate the globe
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 100); // Smooth rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      {/* Globe Container */}
      <div 
        className={`relative w-32 h-32 sm:w-40 sm:h-40 mx-auto cursor-pointer transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.location.href = '/churches'}
        style={{
          transform: `rotateY(${rotation}deg) ${isHovered ? 'scale(1.1)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Globe Base */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl">
          {/* Continents overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/60 via-green-500/40 to-green-600/60 opacity-80">
            {/* Continent shapes (simplified) */}
            <div className="absolute top-6 left-8 w-4 h-3 bg-green-600 rounded-full opacity-70"></div>
            <div className="absolute top-12 right-6 w-6 h-4 bg-green-600 rounded-lg opacity-70"></div>
            <div className="absolute bottom-8 left-6 w-5 h-3 bg-green-600 rounded-full opacity-70"></div>
            <div className="absolute bottom-6 right-8 w-3 h-2 bg-green-600 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 bg-green-600 rounded-lg opacity-70"></div>
          </div>
          
          {/* Longitude lines */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
          <div className="absolute inset-2 rounded-full border border-white/15"></div>
          <div className="absolute inset-4 rounded-full border border-white/10"></div>
          
          {/* Latitude lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-white/20"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-white/20"></div>
          
          {/* Church markers (pulsing dots) */}
          <div className="absolute top-8 right-12 w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-10 left-10 w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-1/2 right-8 w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-pulse shadow-lg"></div>
          
          {/* Highlight effect */}
          <div className="absolute top-4 left-6 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>
        </div>
        
        {/* Hover glow effect */}
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isHovered 
            ? 'shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(59,130,246,0.3)]' 
            : 'shadow-lg'
        }`}></div>
      </div>
      
      {/* Click instruction */}
      <div className="text-center mt-4">
        <p className="text-sm font-medium text-[hsl(var(--brand))] group-hover:text-[hsl(var(--brand))]/80 transition-colors">
          🌍 Explore Our Worldwide Churches
        </p>
        <p className="text-xs text-black/60 mt-1">
          Click to discover FIBC churches worldwide
        </p>
      </div>
      
      {/* Interactive hint */}
      {isHovered && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--brand))] text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce">
          Click to explore!
        </div>
      )}
    </div>
  );
}
