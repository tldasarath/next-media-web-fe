// pages/404.js or app/not-found.js (depending on your Next.js version)

import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="h-auto flex items-center justify-center pt-15 ">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Content Section - Left/Center */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold  mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold  mb-4">
            Oops! Page Not Found!
          </h2>
          <p className="text-lg  mb-8 max-w-md">
            We're sorry but we can't seem to find the page you requested. This
            might be because you have typed the web address incorrectly.
          </p>
          <Link
            href="/"
            className="inline-block bg-transparent border hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 border-white rounded-4xl text-white px-6 py-3  font-medium  transition duration-200"
          >
            Back To Home
          </Link>
        </div>

        {/* Image Section - Right */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/images/404.png" // Replace with your image path
              alt="404 Error Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
