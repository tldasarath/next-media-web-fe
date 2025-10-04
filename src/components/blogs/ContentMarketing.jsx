import Image from 'next/image';
import Link from 'next/link';

export default function ContentMarketing() {
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
                  Content Marketing and Media Production Dubai
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
                    src="/images/blogs/production.png"
                    alt="Content Marketing and Media Production Dubai - Next Media"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-center text-sm mt-2">
                  Next Media - Content Marketing and Media Production Services
                  in Dubai
                </p>
              </div>

              {/* Content Section */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p className="mb-4">
                    In the modern digital landscape, content is not just
                    king—it's the bridge between your brand and your audience.
                    Businesses in Dubai and across the GCC need high-quality,
                    engaging content to capture attention and drive results.
                  </p>
                  <p className="mb-4">
                    Next Media specializes in content marketing and media
                    production in Dubai, helping brands create stories that
                    connect, inspire, and convert.
                  </p>
                </section>

                {/* The Power of Strategic Content */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    The Power of Strategic Content
                  </h2>
                  <p className="mb-4">
                    Effective content goes beyond blogs or social posts—it's
                    about delivering value that aligns with your brand's
                    objectives. Our content marketing strategies include
                    SEO-optimized blogs, social media campaigns, email
                    marketing, and video storytelling.
                  </p>
                  <p className="mb-4">
                    Each piece is designed to engage your target audience while
                    improving visibility, traffic, and conversions.
                  </p>
                </section>

                {/* Multimedia and Video Production */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Multimedia and Video Production
                  </h2>
                  <p className="mb-4">
                    Video content is one of the most effective ways to engage
                    audiences. As a web and media production company in Dubai,
                    Next Media produces high-quality videos, animations, and
                    interactive media tailored to your brand.
                  </p>
                  <p className="mb-4">
                    These visually compelling assets help communicate your
                    message efficiently while increasing audience engagement.
                  </p>
                </section>

                {/* Social Media and Digital Campaigns */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Social Media and Digital Campaigns
                  </h2>
                  <p className="mb-4">
                    Content is most effective when paired with strategic
                    promotion. We integrate content marketing with social media
                    campaigns, ensuring your message reaches the right people at
                    the right time.
                  </p>
                  <p className="mb-4">
                    Our data-driven approach ensures campaigns are optimized for
                    engagement, reach, and conversion.
                  </p>
                </section>

                {/* Brand Storytelling for Maximum Impact */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Brand Storytelling for Maximum Impact
                  </h2>
                  <p className="mb-4">
                    Every brand has a story. We focus on branding and
                    advertising solutions Dubai to craft narratives that reflect
                    your values, resonate with your audience, and differentiate
                    you from competitors.
                  </p>
                  <p className="mb-4">
                    Whether it's through written content, visuals, or
                    interactive media, storytelling drives recognition, loyalty,
                    and trust.
                  </p>
                </section>

                {/* End-to-End Services for GCC Businesses */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    End-to-End Services for GCC Businesses
                  </h2>
                  <p className="mb-4">
                    Next Media provides end-to-end content marketing services
                    for GCC businesses, from strategy and production to
                    distribution and analysis.
                  </p>
                  <p className="mb-4">
                    This ensures your campaigns are cohesive, effective, and
                    aligned with your overall marketing objectives.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                  <p className="mb-4">
                    High-quality content and media production are essential for
                    businesses aiming to thrive in Dubai's competitive market.
                    With Next Media's content marketing and media production
                    services, your brand can engage audiences, strengthen
                    credibility, and achieve measurable growth.
                  </p>
                  <p className="">
                    Let us help you create compelling stories and digital
                    experiences that elevate your business.
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
