'use client';
import { useState } from 'react';
import Image from 'next/image';
import ShinyText from '../animations/ShinyText';

const images = [
  '/images/gallery/ADAMS AURUM [LETTER HEAD].jpg',
  '/images/gallery/noora logo mockups-02.jpg',
  '/images/gallery/EWF BRAND  GUIDELINES 2-01.jpg',
  '/images/gallery/smash.jpg',
  '/images/gallery/adams aurum GUIDLINES-01.jpg',
  '/images/gallery/EWF-BRAND-GUIDELINES.jpg',
  '/images/gallery/POSTER-MOCKUP.jpg',
  '/images/gallery/noor2.png',
  '/images/gallery/GOLDEN VISA MOCKUP.jpg',
];

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [loaded, setLoaded] = useState({}); // store state per image

  const ratios = [
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-[16/9]',
    'aspect-square',
  ];

  const handleImageLoad = (src) => {
    // keep skeleton for 800ms after image loads
    setTimeout(() => {
      setLoaded((prev) => ({ ...prev, [src]: true }));
    }, 3000); // Reduced delay for better UX
  };

  return (
    <section className="container-custom pt-15">
      <div className="w-full mx-auto">
        {/* <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Our Gallery
        </h2> */}
        <div className="text-center mb-16">
          <ShinyText text="Our Gallery" disabled={false} speed={2.3} />
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 md:columns-4 gap-6">
          {images.map((src, index) => {
            const ratio = ratios[index % ratios.length];
            const isLoaded = loaded[src];

            return (
              <div
                key={index}
                className={`relative mb-6 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 ${ratio}`}
                onClick={() => setHoveredImage(src)}
              >
                {/* Enhanced Skeleton Loader with Wave Effect */}
                {!isLoaded && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 via-gray-500/50 to-gray-400/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent -skew-x-12 animate-wave"></div>
                    </div>
                  </div>
                )}

                {/* Image hidden until skeleton delay is done */}
                <Image
                  src={src}
                  alt={`Gallery ${index}`}
                  width={600}
                  height={400}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoadingComplete={() => handleImageLoad(src)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Preview on Click */}
      {hoveredImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setHoveredImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50 bg-gray-800 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            onClick={() => setHoveredImage(null)}
          >
            ×
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={hoveredImage}
              alt="Hovered Preview"
              width={1200}
              height={800}
              className="object-contain w-auto h-auto max-h-[85vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Add custom styles for the wave animation */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-wave {
          animation: wave 1.8s infinite;
        }
      `}</style>
    </section>
  );
}
