'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ShinyText from '../animations/ShinyText';

export default function ServicesSection() {
  const [loadedImages, setLoadedImages] = useState({});

  const services = [
    {
      id: 1,
      title: 'BRANDING & IDENTITY',
      description:
        'We craft memorable brand identities that reflect your values and vision. From logos and naming to complete brand strategies, guidelines, and visual elements like taglines, colors, and typography — we help you build a brand that truly stands out.',
      image: '/images/services/branding-idendity.jpg',
      points: [
        'Brand Strategy & Positioning',
        'Logo Design & Visual Identity',
        'Brand Guidelines & Messaging',
      ],
    },
    {
      id: 2,
      title: 'VIDEOGRAPHY SERVICES',
      description:
        'Bring your story to life through dynamic visuals. We produce professional promo videos, interviews, reels, and event highlights with high-quality editing, motion graphics, and storytelling that leaves a lasting impact.',
      image: '/images/services/videography.jpg',
      points: [
        'Promotional Videos',
        'Product Videos',
        'Event/Wedding Coverage',
        'Social Media Reels',
        'Podcast Shoot',
      ],
    },
    {
      id: 3,
      title: 'PHOTOGRAPHY SERVICES',
      description:
        "Capture every moment with precision and creativity. From corporate portraits to product showcases and event coverage, our photography services highlight your brand's best angles with clarity and style.",
      image: '/images/services/IMAGES.jpg',
      points: [
        'Product Photography',
        'Event Photography',
        'Personal Photoshoot',
        'Wedding Photography',
      ],
    },
    {
      id: 4,
      title: 'WEB DESIGN & DEVELOPMENT',
      description:
        'We create modern, responsive, and user-friendly websites tailored to your business needs. From corporate and e-commerce sites to landing pages and microsites, our web solutions focus on functionality, design excellence, and seamless user experience.',
      image: '/images/services/web-design.jpg',
      points: [
        'Custom Website Design',
        'E-Commerce Solutions',
        'UX/UI Design',
        'Website Maintenance & Support',
      ],
    },
    {
      id: 5,
      title: 'SOCIAL MEDIA MARKETING',
      description:
        'Boost your online presence with our end-to-end digital marketing solutions. We manage social media, run targeted Google Ads, optimize websites for SEO, and execute data-driven email campaigns — ensuring visibility, engagement, and conversions.',
      image: '/images/services/social-media.jpg',
      points: [
        'Content Planning & Creation',
        'Account Management',
        'Community Engagement',
        'Social Media Advertising',
      ],
    },
    {
      id: 6,
      title: 'CONTENT MARKETING',
      description:
        "Our creative team delivers powerful designs that speak louder than words. Whether it's brochures, flyers, business cards, company profiles, pitch decks, banners, or corporate stationery, we design to impress across print and digital platforms.",
      image: '/images/services/content-marketing.jpg',
      points: [
        'Blog & Article Writing',
        'Graphic Design & Visual Content',
        'Video Production & Editing',
      ],
    },
  ];

  // Handle image load with delay
  const handleImageLoad = (src) => {
    setTimeout(() => {
      setLoadedImages((prev) => ({ ...prev, [src]: true }));
    }, 1600);
  };

  // Framer motion variants for animation
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className="pt-15 container-custom">
      <div className="w-full">
        <div className="text-center mb-16">
          <ShinyText text="Our Services" disabled={false} speed={2.3} />
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const isImageLoaded = loadedImages[service.image];

            return (
              <motion.div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-11 items-stretch min-h-[28rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto rounded-2xl overflow-hidden bg-stone-50/10`}
                style={{ boxShadow: '0 25px 70px rgba(0,0,0,0.5)' }}
                custom={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                {/* Image Section with Skeleton Loader */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full h-full">
                    <div className="relative group h-full">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                      <div className="relative h-full rounded-lg overflow-hidden">
                        {/* Skeleton Loader */}
                        {!isImageLoaded && (
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 via-gray-500/50 to-gray-400/50">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent -skew-x-12 animate-wave"></div>
                            </div>
                          </div>
                        )}

                        {/* Image */}
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={400}
                          className={`rounded-lg shadow-xl w-full h-full object-cover transition-opacity duration-500 ${
                            isImageLoaded ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoadingComplete={() =>
                            handleImageLoad(service.image)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                    <p className="text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-white mr-2 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

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
