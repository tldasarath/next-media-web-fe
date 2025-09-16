import React from 'react';

const FoundersSection = () => {
  return (
    <section className="py-12  lg:py-20 container-custom">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6
          "
        >
          Our Founders
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 ">
          Next Media was founded by{' '}
          <span className="font-semibold ">Mr. Rasheeq Abdurahman</span>, a
          serial entrepreneur, graphic designer, and social media marketing
          specialist, alongside{' '}
          <span className="font-semibold ">Mr. Mohammed Anas</span>, an IT and
          networking professional with a strong passion for digital marketing
          and media production.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed ">
          Their shared vision, creativity, and dedication led to the birth of{' '}
          <span className="font-semibold ">Next Media</span> — a creative
          powerhouse driving brands forward across the GCC and India.
        </p>
      </div>
    </section>
  );
};

export default FoundersSection;
