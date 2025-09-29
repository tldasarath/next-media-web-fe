import React from 'react';

const FoundersSection = () => {
  return (
    <section className="py-16 lg:py-24 container-custom relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="w-full 2xl:w-5/6 mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-12 lg:gap-16 relative z-10">
        {/* First Row: Founders Info - Full Width */}
        <div className="w-full text-center   lg:text-left">
          {/* Title with gradient */}
          <h2 className="text-3xl sm:text-4xl text-center md:text-5xl font-extrabold mb-8   ">
            Our Founders
          </h2>

          {/* Intro with enhanced styling */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl md:text-xl leading-relaxed  bg-gray-800/80 p-6 rounded-2xl border-l-4 border-purple-500 shadow-lg">
              Next Media was founded by{' '}
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mr. Rasheeq Abdurahman
              </span>
              , a serial entrepreneur, graphic designer, and social media
              marketing specialist, alongside{' '}
              <span className="font-bold  bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Mr. Mohammed Anas
              </span>
              , an IT and networking professional with a strong passion for
              digital marketing and media production. Their shared vision,
              creativity, and dedication led to the birth of{' '}
              <span className="font-bold text-white">Next Media</span> — a
              creative powerhouse driving brands forward across the GCC and
              India.
            </p>
          </div>
        </div>

        {/* Second Row: What Makes Us Unique - Full Width */}
        {/* <div className="w-full text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r ">
            What Makes Us Unique
          </h3>
          
          <div className="space-y-6">
            <p className="text-lg sm:text-xl md:text-xl leading-relaxed  bg-gray-800/80 p-6 rounded-2xl border-l-4 border-green-500 shadow-lg">
              What makes Next Media unique is not just the services we deliver but the complete ecosystem of excellence we have built. <span className="font-bold text-white bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">BefirstHR</span>, the sister company of Next Media, carries forward this vision by offering professional HR and business solutions that enable companies to grow stronger, smarter, and more sustainable.
            </p>
            
            <p className="text-lg sm:text-xl md:text-xl leading-relaxed  bg-gray-800/80 p-6 rounded-2xl border-r-4 border-yellow-500 shadow-lg">
              Together, Next Media and BefirstHR create a powerhouse of business growth. We build impactful brands, empower people, and strengthen organizations for long-term success.
            </p>
            
            <p className="text-lg sm:text-xl md:text-xl leading-relaxed  bg-gray-800/80 p-6 rounded-2xl border-l-4 border-pink-500 shadow-lg">
              By choosing us, you gain more than just a service provider — you gain a strategic partner committed to turning your goals into reality. With innovation, strategy, and dedication, we ensure your brand receives the recognition and success it truly deserves.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FoundersSection;
