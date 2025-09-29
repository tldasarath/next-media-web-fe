// pages/faq.js or components/FAQ.js
'use client';
import { faqData } from '@/datas/faqs';
import { useState, useEffect } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Open the first FAQ by default when the component loads
  useEffect(() => {
    if (faqData.length > 0) {
      setActiveIndex(0);
    }
  }, []);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="pt-15 container-custom">
      <div className="w-3/4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-black/50 overflow-hidden shadow rounded-lg"
              onMouseEnter={() => handleHover(index)} // hover instead of click
            >
              <div className="flex justify-between items-center w-full px-6 py-5 text-left cursor-pointer">
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Smooth dropdown transition */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
