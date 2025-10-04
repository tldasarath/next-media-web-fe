import Image from 'next/image';
import Link from 'next/link';

export default function ProfessionalWebDevelopment() {
  // Sample blog data for the sidebar with images
  const otherBlogs = [
    {
      id: 1,
      title:
        'Best Digital Marketing Agency in Dubai: Elevate Your Brand with Next Media',
      date: '2024-09-27',
      href: '/digital-marketing',
      image: '/images/blogs/digital-marketing.png',
    },
    {
      id: 2,
      title:
        'Top Creative Agency in Dubai: Transforming Brands with Innovation',
      date: '2024-09-27',
      href: '/creative-agency',
      image: '/images/blogs/creative-agency.png',
    },
    {
      id: 3,
      title:
        'End-to-End Digital Marketing Services Dubai: Elevate Your Brand with Next Media',
      date: '2024-09-27',
      href: '/end-to-end',
      image: '/images/blogs/end-to-end.png',
    },
    {
      id: 4,
      title: 'Professional Web Development and Branding Dubai',
      date: '2024-09-27',
      href: '/web-development',
      image: '/images/blogs/web-development.png',
    },
    {
      id: 5,
      title: 'Content Marketing and Media Production Dubai',
      date: '2024-09-27',
      href: '/content-marketing',
      image: '/images/blogs/production.png',
    },
  ];

  return (
    <>
      <div className="pt-15 container-custom">
        <div className=" w-full xl:w-6/7 bg-black/60 shadow-2xl py-4 rounded-3xl mx-auto px-2 lg:py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Header Section */}
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  Professional Web Development and Branding Dubai
                </h1>
                <div className="border-b border-gray-200 pb-6">
                  <p className="text-lg">
                    Published on {new Date().toLocaleDateString()}
                  </p>
                </div>
              </header>

              {/* Featured Image - Increased Height */}
              <div className="mb-8">
                <div className="relative w-full h-[300px] xl:h-[600px] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/blogs/web-development.png"
                    alt="Professional Web Development and Branding Dubai - Next Media"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-center text-sm mt-2">
                  Next Media - Professional Web Development and Branding
                  Services in Dubai
                </p>
              </div>

              {/* Content Section */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p className="mb-4">
                    In the digital era, your website is often the first
                    interaction customers have with your brand. Investing in
                    professional web development and branding in Dubai ensures
                    your business makes a strong, lasting impression.
                  </p>
                  <p className="mb-4">
                    At Next Media, we combine creativity, functionality, and
                    user experience to deliver websites that not only look
                    impressive but also drive conversions and customer
                    engagement.
                  </p>
                </section>

                {/* Why Web Development Matters */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Why Web Development Matters
                  </h2>
                  <p className="mb-4">
                    A well-developed website is more than just aesthetics. It's
                    about performance, speed, responsiveness, and accessibility.
                    As a leading web development company in Dubai, we focus on
                    creating websites that load quickly, function flawlessly
                    across devices, and are optimized for search engines.
                  </p>
                  <p className="mb-4">
                    This ensures visitors have a seamless experience, which
                    increases trust and encourages interaction.
                  </p>
                </section>

                {/* Branding that Speaks */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Branding that Speaks
                  </h2>
                  <p className="mb-4">
                    Brand identity is critical to standing out in Dubai's
                    competitive market. Our branding solutions encompass logo
                    design, color schemes, typography, and messaging.
                  </p>
                  <p className="mb-4">
                    Each element is strategically designed to communicate your
                    brand's values and create a consistent, recognizable
                    presence across digital and offline platforms.
                  </p>
                </section>

                {/* Content and UX Integration */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Content and UX Integration
                  </h2>
                  <p className="mb-4">
                    Websites are not just visual—they're experiential. Our team
                    integrates compelling content marketing and media production
                    Dubai with user-friendly navigation and intuitive design.
                  </p>
                  <p className="mb-4">
                    From interactive multimedia to informative blogs, every
                    element is crafted to educate, entertain, and convert your
                    audience.
                  </p>
                </section>

                {/* SEO and Digital Strategy Alignment */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    SEO and Digital Strategy Alignment
                  </h2>
                  <p className="mb-4">
                    A visually stunning website is only effective if it's
                    discoverable. Next Media ensures every website we develop is
                    optimized for SEO, aligning content structure, keywords, and
                    meta data to increase visibility.
                  </p>
                  <p className="mb-4">
                    Coupled with our broader digital marketing services, your
                    website becomes a central hub for engagement and business
                    growth.
                  </p>
                </section>

                {/* Tailored Solutions for Businesses in the GCC */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Tailored Solutions for Businesses in the GCC
                  </h2>
                  <p className="mb-4">
                    Dubai-based companies and GCC businesses face unique market
                    challenges. We provide custom web and branding solutions for
                    GCC businesses, taking into account local preferences,
                    cultural nuances, and regional digital trends.
                  </p>
                  <p className="mb-4">
                    This ensures your online presence resonates with the target
                    audience.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                  <p className="mb-4">
                    Investing in professional web development and branding in
                    Dubai is crucial for building credibility and growing your
                    business. Next Media combines creative design, technical
                    expertise, and strategic planning to deliver websites that
                    elevate your brand, engage your audience, and drive
                    measurable results.
                  </p>
                  <p className="">
                    Partner with us to transform your online presence into a
                    powerful business tool.
                  </p>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-800/50 p-6 rounded-lg sticky top-4">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-600">
                  Other Blog Posts
                </h3>
                <ul className="space-y-4">
                  {otherBlogs.map((blog) => (
                    <li
                      key={blog.id}
                      className="border-b border-gray-700 pb-4 last:border-b-0"
                    >
                      <Link
                        href={blog.href}
                        className="flex items-start gap-3 group hover:text-blue-400 transition-colors duration-200"
                      >
                        {/* Blog Image - Reduced Width */}
                        <div className="relative w-16 h-16 flex-shrink-0 bg-gray-700 rounded overflow-hidden">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Title and Date */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-base mb-1 group-hover:text-blue-400 line-clamp-2">
                            {blog.title}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {new Date(blog.date).toLocaleDateString()}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
