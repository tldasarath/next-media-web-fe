import Image from 'next/image';
import Link from 'next/link';

export default function CreativeAgency() {
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
        <div className=" w-full xl:w-6/7 bg-black/60 shadow-2xl rounded-3xl mx-auto px-2 lg:py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Header Section */}
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  Top Creative Agency in Dubai: Transforming Brands with
                  Innovation
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
                    src="/images/blogs/creative-agency.png"
                    alt="Top Creative Agency in Dubai - Next Media"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-center text-sm mt-2">
                  Next Media - Leading Creative Agency in Dubai Transforming
                  Brands with Innovation
                </p>
              </div>

              {/* Content Section */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p className="mb-4">
                    In a city renowned for innovation, luxury, and a competitive
                    market, standing out requires more than just a good
                    product—it demands a compelling brand story and creative
                    marketing strategies. As a top creative agency in Dubai,
                    Next Media combines creativity, strategy, and technology to
                    deliver marketing solutions that not only capture attention
                    but also drive measurable business growth.
                  </p>
                  <p className="mb-4">
                    From innovative campaigns to visually compelling content, we
                    help brands build lasting connections with their audiences
                    across the GCC and beyond.
                  </p>
                </section>

                {/* Crafting Digital Presence */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Crafting a Strong Digital Presence
                  </h2>
                  <p className="mb-4">
                    A strong online presence is crucial for businesses in
                    today's digital-first world. At Next Media, we go beyond
                    conventional marketing. Our team develops data-driven
                    strategies that integrate SEO, PPC, social media, and
                    content marketing to ensure your brand reaches the right
                    audience at the right time.
                  </p>
                  <p className="mb-4">
                    By analyzing market trends and customer behavior, we create
                    campaigns that drive engagement, traffic, and conversions,
                    helping brands maximize ROI.
                  </p>
                </section>

                {/* Content and Media Production */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Innovative Content and Media Production
                  </h2>
                  <p className="mb-4">
                    Content is the backbone of effective digital marketing. As a
                    web and media production company in Dubai, Next Media
                    specializes in producing high-quality visual and written
                    content that communicates your brand story.
                  </p>
                  <p className="mb-4">
                    From website design and video production to interactive
                    media, we craft experiences that resonate with audiences,
                    strengthen brand identity, and enhance recall. Our goal is
                    to make every touchpoint an opportunity for meaningful
                    engagement.
                  </p>
                </section>

                {/* Integrated Branding */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Integrated Branding and Marketing Solutions
                  </h2>
                  <p className="mb-4">
                    Consistency is key when building a recognizable brand. Our
                    branding and advertising solutions in Dubai are designed to
                    align your messaging across digital, social, and traditional
                    channels.
                  </p>
                  <p className="mb-4">
                    Through strategic campaigns and creative storytelling, we
                    help brands establish authority, foster customer trust, and
                    maintain relevance in a constantly evolving market.
                  </p>
                </section>

                {/* GCC Businesses */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Tailored Strategies for GCC Businesses
                  </h2>
                  <p className="mb-4">
                    Understanding the unique dynamics of the GCC market is vital
                    for success. As a trusted marketing agency for GCC
                    businesses, we customize strategies that consider local
                    culture, preferences, and consumer behavior.
                  </p>
                  <p className="mb-4">
                    By combining local insights with global best practices, we
                    help businesses connect authentically with their target
                    audience while driving growth and long-term loyalty.
                  </p>
                </section>

                {/* Comprehensive Services */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Comprehensive Marketing Services
                  </h2>
                  <p className="mb-4">
                    Next Media offers end-to-end digital marketing services in
                    Dubai, covering everything from strategy development to
                    execution. Our services include professional web
                    development, content marketing, social media management,
                    paid advertising, and analytics.
                  </p>
                  <p className="mb-4">
                    This integrated approach ensures that every marketing effort
                    contributes to measurable results and sustainable business
                    growth.
                  </p>
                </section>

                {/* Business Growth */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Driving Business Growth Through Innovation
                  </h2>
                  <p className="mb-4">
                    At Next Media, we are committed to delivering business
                    growth marketing solutions in Dubai that combine creativity,
                    analytics, and technology.
                  </p>
                  <p className="mb-4">
                    By leveraging innovative tools and campaigns, we help
                    businesses scale, increase revenue, and maintain a
                    competitive edge in today's fast-paced digital landscape.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                  <p className="mb-4">
                    Partnering with a top creative agency in Dubai goes beyond
                    outsourcing marketing—it's about gaining a strategic partner
                    who understands your vision, audience, and growth
                    objectives.
                  </p>
                  <p className="">
                    Next Media provides end-to-end solutions that elevate brand
                    presence, engage customers meaningfully, and deliver
                    measurable results. With our expertise, your business can
                    craft a compelling brand story, execute innovative
                    campaigns, and achieve sustainable growth in the digital
                    era.
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
