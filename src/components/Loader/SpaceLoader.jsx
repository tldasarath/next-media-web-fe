'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function SpaceLoader() {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const particlesRef = useRef([]);
  const orbitRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const loaderText = 'NEXTMEDIA'.split('');
  const particleCount = 20; // Reduced particle count

  useEffect(() => {
    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 0.5,
    }));

    // Animate letters with a more cosmic effect
    gsap.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: 50,
        rotation: Math.random() * 20 - 10,
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
        onComplete: () => {
          // Start continuous animation
          gsap.to(lettersRef.current, {
            y: -3,
            duration: 1.5,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            stagger: {
              each: 0.15,
              from: 'center',
            },
          });
        },
      }
    );

    // Create orbiting element animation
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: 'none',
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

    // Simulate loading progress
    const loadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadInterval);

          // Animate out before hiding
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

          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(loadInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="loader-wrap fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Animated background particles */}
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

      {/* Orbiting element */}
      <div
        ref={orbitRef}
        className="absolute w-40 h-40 md:w-48 md:h-48 border border-opacity-20 border-[#35A3E2] rounded-full"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#35A3E2] border-[0.5px] border-white rounded-full"></div>
      </div>

      <div className="text-white text-sm mt-3 font-mono">{progress}%</div>
    </div>
  );
}

export default SpaceLoader;
