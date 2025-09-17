'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

function SpaceLoader() {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const orbitRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const particleCount = 20;

  useEffect(() => {
    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 0.5,
    }));

    // Orbit rotation
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      });
    }

    // Animate particles
    particlesRef.current.forEach((particle, i) => {
      const element = document.getElementById(`particle-${i}`);
      if (element) {
        gsap.to(element, {
          x: `+=${Math.random() * 60 - 30}`,
          y: `+=${Math.random() * 60 - 30}`,
          duration: particle.speed * 3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      }
    });

    // Progress bar (5s total)
    const duration = 1000;
    const startTime = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(percent));

      if (percent >= 100) {
        clearInterval(tick);
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power2.in',
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = 'none';
            }
          },
        });
      }
    }, 50);

    return () => clearInterval(tick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="loader-wrap fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {particlesRef.current.map((particle, i) => (
          <div
            key={i}
            id={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-b from-[#F53A7A] to-[#190CD2] opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Circle + Logo wrapper */}
      <div className="relative flex flex-col items-center">
        {/* Circle with orbiting dot */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
          {/* Static Logo in the CENTER */}
          <Image
            src="/logos/logo1.png" // change path to your logo
            alt="Logo"
            width={80}
            height={80}
            className="object-contain z-10"
          />

          {/* Orbit border (rotates) */}
          <div
            ref={orbitRef}
            className="absolute inset-0 border border-opacity-20 border-[#35A3E2] rounded-full"
          >
            {/* Orbiting dot */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#35A3E2] border-[0.5px] border-white rounded-full"></div>
          </div>
        </div>

        {/* Percentage BELOW */}
        <div className="text-white text-sm mt-4 font-mono">{progress}%</div>
      </div>
    </div>
  );
}

export default SpaceLoader;
