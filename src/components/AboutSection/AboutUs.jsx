'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Add CSS for wave animation directly in a style tag
const waveAnimationStyle = `
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
`;

const teamMembers = [
  {
    id: 1,
    name: 'SHAFI',
    position: 'UI/UX',
    image: '/images/about-us/person.png',
  },
  {
    id: 2,
    name: 'SARFAS',
    position: 'Graphic Designer',
    image: '/images/about-us/person.png',
  },
  {
    id: 6,
    name: 'DIYA',
    position: 'Graphic Designer',
    image: '/images/about-us/person.png',
  },
  {
    id: 3,
    name: 'DASARATH',
    position: 'Fullstack Developer',
    image: '/images/about-us/person.png',
  },
  {
    id: 5,
    name: 'ARJUN',
    position: 'Fullstack Developer',
    image: '/images/about-us/person.png',
  },
  {
    id: 4,
    name: 'NAZMAL',
    position: 'Digital Marketing',
    image: '/images/about-us/person.png',
  },
  {
    id: 7,
    name: 'DIYA KRISHNA',
    position: 'Digital Marketing',
    image: '/images/about-us/person.png',
  },
  {
    id: 8,
    name: 'VISMAYA',
    position: 'Social Media',
    image: '/images/about-us/person.png',
  },
];

export default function AboutUs() {
  const [loaded, setLoaded] = useState({});

  useEffect(() => {
    // Inject the wave animation styles when component mounts
    const styleElement = document.createElement('style');
    styleElement.textContent = waveAnimationStyle;
    document.head.appendChild(styleElement);

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleImageLoad = (src) => {
    // keep skeleton for 1.5s after image loads (reduced from 3s for better UX)
    setTimeout(() => {
      setLoaded((prev) => ({ ...prev, [src]: true }));
    }, 3000);
  };

  return (
    <section className="container-custom pt-15">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-5xl md:pt-6 lg:pt-0">
          About Us
        </h2>
      </div>

      <div className="space-y-12 text-start">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-[24rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-72 md:h-96 relative">
            <div className="relative group h-full w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full w-full">
                {/* Enhanced Skeleton Loader with Wave Effect */}
                {!loaded['image1'] && (
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 via-gray-500/50 to-gray-400/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent -skew-x-12 animate-wave"></div>
                    </div>
                  </div>
                )}
                <Image
                  src="/images/about-us/image1.jpg"
                  alt="About Next Digital"
                  fill
                  className={`rounded-lg shadow-xl object-cover transition-opacity duration-500 ${
                    loaded['image1'] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoadingComplete={() => handleImageLoad('image1')}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 py-5 xl:pr-4 md:py-6 flex flex-col justify-start">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="mb-3 text-md xl:text-base">
                At <span className="font-bold">Next Media</span>, we believe the
                strongest brands are built at the point where creativity,
                strategy and technology come together. We are a marketing agency
                offering complete solutions in digital marketing, web
                development, media production and branding across the GCC and
                India. Our focus is on delivering measurable results, creating
                unique stories, and building experiences that connect people
                with brands while helping businesses grow faster and stronger in
                today's competitive and digital-first market.
              </p>
              <p className="mb-3 text-md xl:text-base">
                Founded by Rasheeq and Anas,{' '}
                <span className="font-bold">Next Media</span> grew from a shared
                passion for design, marketing and media. Their vision was to
                create a one-stop agency where businesses thrive with impactful
                ideas.
              </p>
              <p className="mb-3 text-md xl:text-base">
                From crafting brand identities to running campaigns, creating
                digital experiences and producing content, we deliver impact.
                Our integrated approach ensures every project builds trust,
                captures attention and drives meaningful results for clients.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[24rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-72 md:h-96 relative ">
            <div className="relative group h-full w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full w-full">
                {/* Enhanced Skeleton Loader with Wave Effect */}
                {!loaded['image2'] && (
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 via-gray-500/50 to-gray-400/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent -skew-x-12 animate-wave"></div>
                    </div>
                  </div>
                )}
                <Image
                  src="/images/about-us/image2.jpg"
                  alt="Next Digital Mission"
                  fill
                  className={`rounded-lg shadow-xl object-cover transition-opacity duration-500 ${
                    loaded['image2'] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoadingComplete={() => handleImageLoad('image2')}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-5 md:p-6 flex flex-col justify-center gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm md:text-base">
                Our mission is to provide smart and creative{' '}
                <span className="font-bold "> digital marketing </span>{' '}
                solutions that help businesses grow, build trust, engage
                customers, and achieve real results. As a digital marketing
                agency in Dubai, we work to create simple and effective
                strategies that bring lasting success.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm md:text-base ">
                We aim to become a leading{' '}
                <span className="font-bold ">
                  digital marketing agency in Dubai{' '}
                </span>{' '}
                that drives business growth through creativity, smart
                strategies, and technology. Our focus is on building global
                recognition while keeping digital marketing simple and
                effective.
              </p>
            </div>
          </div>
        </div>

        {/* CEO Message Section */}

        {/* Company Message Section - Without Image */}
        <div
          className="flex flex-col items-stretch min-h-[20rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto 
  rounded-2xl overflow-hidden transition-all duration-500 
  bg-gradient-to-br from-blue-50/40 to-purple-50/40 p-8 md:p-12 
  shadow-lg hover:shadow-2xl relative group"
        >
          {/* Glow Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center relative">
            <h3
              className="text-3xl md:text-5xl font-extrabold mb-6 
       bg-clip-text 
      tracking-wide"
            >
              Message from <span className="">Next Media</span>
            </h3>

            <p className="text-lg md:text-xl mb-6 leading-relaxed ">
              At <span className="font-bold ">Next Media</span>, we believe
              creativity and strategy go hand in hand. Our mission is to empower
              businesses with innovative digital solutions that build
              visibility, spark engagement, and drive growth. From{' '}
              <span className="font-semibold">web design</span>
              and <span className="font-semibold">branding</span> to
              <span className="font-semibold"> social media</span> and
              <span className="font-semibold"> content creation</span>, we craft
              experiences that connect brands with people in meaningful ways.
            </p>

            <p className="text-lg md:text-xl mb-6 leading-relaxed italic ">
              We don't just deliver services — we build partnerships. Every
              project is an opportunity to tell a story, create an impact, and
              take your business to the next level.
            </p>

            <p
              className="text-xl md:text-2xl font-bold mt-6 border-t border-gray-300 pt-4 
       bg-clip-text "
            >
              Next Media – Where ideas meet impact.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-stretch min-h-[20rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300 p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <h3 className="text-2xl md:text-4xl font-bold mb-10 text-center">
              Our Founders
            </h3>

            {/* Founder 1 - Image Left, Content Right */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-12">
              {/* Image */}
              <div className="w-56 h-64 md:w-60 md:h-72 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                {/* Enhanced Skeleton Loader with Wave Effect */}
                {!loaded['rasheeq'] && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 via-gray-500/50 to-gray-400/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent -skew-x-12 animate-wave"></div>
                    </div>
                  </div>
                )}
                <Image
                  src="/images/team/Rasheeq.jpg"
                  alt="Mr. Rasheeq Abdurahman"
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    loaded['rasheeq'] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoadingComplete={() => handleImageLoad('rasheeq')}
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h4 className="text-lg md:text-xl font-semibold mb-3">
                  Mr. Rasheeq Abdurahman
                </h4>
                <p className="text-sm md:text-base leading-normal md:leading-relaxed text-left md:text-justify">
                  Founder of Next Media, Mr. Rasheeq is a passionate graphic
                  designer and social media marketing specialist with a strong
                  entrepreneurial spirit. A serial entrepreneur, he also leads
                  successful ventures including{' '}
                  <span className="font-semibold">
                    Invest First, Befirst Enterprises, Befirst HR, and Be Your
                    Brand
                  </span>
                  . With his expertise in branding, marketing, and business
                  strategy, Rasheeq brings vision and creativity to every
                  project, driving Next Media's mission to redefine branding and
                  digital experiences.
                </p>
              </div>
            </div>

            {/* Founder 2 - Content Left, Image Right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 mb-12">
              {/* Image */}
              <div className="w-56 h-64 md:w-60 md:h-72 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                {/* Enhanced Skeleton Loader with Wave Effect */}
                {!loaded['anas'] && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 via-gray-500/50 to-gray-400/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent -skew-x-12 animate-wave"></div>
                    </div>
                  </div>
                )}
                <Image
                  src="/images/team/Anas.jpg"
                  alt="Mr. Mohammed Anas"
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    loaded['anas'] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoadingComplete={() => handleImageLoad('anas')}
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h4 className="text-lg md:text-xl font-semibold mb-3">
                  Mr. Mohammed Anas
                </h4>
                <p className="text-sm md:text-base leading-normal md:leading-relaxed text-left md:text-justify">
                  Co-founder of Next Media, Mr. Mohammed Anas is a seasoned IT
                  and networking specialist with a deep passion for digital
                  marketing, media production, and web development. Having
                  worked with several prestigious companies in Dubai, Anas
                  combines his technical expertise with creative flair to
                  deliver innovative solutions. His dedication to blending
                  technology with creativity plays a key role in shaping Next
                  Media into a full-fledged creative powerhouse.
                </p>
              </div>
            </div>

            {/* Closing Paragraph */}
            <p className="text-center text-sm md:text-md mt-8 md:mt-12 max-w-3xl mx-auto leading-normal md:leading-relaxed">
              Together, their thoughtful planning, entrepreneurial drive, and
              shared passion for design and media led to the creation of{' '}
              <span className="font-bold">Next Media</span> — a visionary agency
              helping brands in the GCC and India move to the next level.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl  font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 max-w-8xl  xl:gap-y-8 2xl:gap-x-36 xl:gap-0 mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              <div className="relative h-72 w-64 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={256}
                  height={288}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
