import Image from 'next/image';
import Link from 'next/link';

export default function EndToEndDigitalMarketing() {
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
                  End-to-End Digital Marketing Services Dubai: Elevate Your
                  Brand with Next Media
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
                    src="/images/blogs/end-to-end.png"
                    alt="End-to-End Digital Marketing Services Dubai - Next Media"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-center text-sm mt-2">
                  Next Media - Comprehensive End-to-End Digital Marketing
                  Services in Dubai
                </p>
              </div>

              {/* Content Section */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p className="mb-4">
                    Navigating the digital landscape can be overwhelming for
                    businesses striving to make a mark online. From social media
                    to search engines, websites, and content strategies, every
                    channel plays a crucial role. Opting for end-to-end digital
                    marketing services in Dubai ensures a cohesive, strategic
                    approach to achieving sustainable growth.
                  </p>
                  <p className="mb-4">
                    At Next Media, we provide a full suite of digital solutions
                    designed to elevate your brand, boost engagement, and drive
                    measurable results. Whether you are a startup or an
                    established enterprise, our approach transforms ideas into
                    impactful campaigns that resonate with your audience.
                  </p>
                </section>

                {/* Strategic Digital Marketing Solutions */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Strategic Digital Marketing Solutions
                  </h2>
                  <p className="mb-4">
                    As the best digital marketing agency in Dubai, Next Media
                    develops tailored strategies that align with your business
                    goals. We analyze market trends, consumer behavior, and
                    competitor activity to create targeted campaigns that
                    deliver results.
                  </p>
                  <p className="mb-4">
                    Our offerings include SEO to improve search visibility, PPC
                    to attract high-intent traffic, and social media marketing
                    to engage audiences across platforms. By combining analytics
                    with creativity, we ensure that every marketing initiative
                    contributes to your business growth.
                  </p>
                </section>

                {/* Creative Storytelling and Branding */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Creative Storytelling and Branding
                  </h2>
                  <p className="mb-4">
                    Creativity is at the heart of effective digital marketing.
                    As a top creative agency in Dubai UAE, we focus on crafting
                    innovative solutions that reflect your brand identity and
                    resonate with your audience.
                  </p>
                  <p className="mb-4">
                    From compelling visuals to persuasive copywriting, we help
                    businesses tell their stories in ways that leave a lasting
                    impact. Our campaigns are designed to stand out in a crowded
                    market, building emotional connections that foster trust and
                    loyalty.
                  </p>
                </section>

                {/* Web and Media Production Services */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Web and Media Production Services
                  </h2>
                  <p className="mb-4">
                    High-quality content is essential to capture attention
                    online. As a leading web and media production company in
                    Dubai, Next Media delivers visually engaging and interactive
                    content, including website design, video production,
                    graphics, and multimedia experiences.
                  </p>
                  <p className="mb-4">
                    Each project is crafted with precision to communicate your
                    brand message effectively and ensure a seamless experience
                    for your audience.
                  </p>
                </section>

                {/* Comprehensive Branding and Advertising */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Comprehensive Branding and Advertising
                  </h2>
                  <p className="mb-4">
                    A strong brand identity is the foundation of long-term
                    success. Our branding and advertising solutions in Dubai
                    include logo design, corporate identity development, and
                    integrated campaigns that position your brand as an
                    authority in your industry.
                  </p>
                  <p className="mb-4">
                    By blending creativity with strategic planning, we deliver
                    campaigns that not only attract attention but also build
                    credibility and trust.
                  </p>
                </section>

                {/* Integrated Marketing Approach */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Integrated Marketing Approach
                  </h2>
                  <p className="mb-4">
                    Consistency is key in today's multi-channel environment. As
                    an integrated marketing agency in Dubai, we ensure all
                    marketing efforts—digital, social, and traditional—are
                    aligned for maximum impact.
                  </p>
                  <p className="mb-4">
                    This approach strengthens brand recognition, drives
                    engagement, and improves the overall effectiveness of
                    campaigns, creating a seamless journey for your customers.
                  </p>
                </section>

                {/* Tailored Solutions for GCC Businesses */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Tailored Solutions for GCC Businesses
                  </h2>
                  <p className="mb-4">
                    Understanding local market dynamics is vital for success in
                    the GCC region. As a marketing agency for GCC businesses,
                    Next Media customizes strategies that reflect cultural
                    nuances, economic trends, and consumer behavior.
                  </p>
                  <p className="mb-4">
                    Our localized approach ensures your campaigns resonate with
                    your target audience, building relevance and fostering
                    stronger connections with your customers.
                  </p>
                </section>

                {/* Professional Web Development and Branding */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Professional Web Development and Branding
                  </h2>
                  <p className="mb-4">
                    A user-friendly, responsive website is crucial for
                    establishing credibility online. Our professional web
                    development and branding services in Dubai focus on building
                    websites that are visually appealing, easy to navigate, and
                    optimized for performance.
                  </p>
                  <p className="mb-4">
                    Every design element and functionality is tailored to
                    enhance user experience and reinforce your brand's identity.
                  </p>
                </section>

                {/* Content Marketing and Media Production */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Content Marketing and Media Production
                  </h2>
                  <p className="mb-4">
                    Engaging, high-quality content drives customer interaction
                    and conversion. Our content marketing and media production
                    services in Dubai include blog writing, social media
                    content, videos, infographics, and multimedia storytelling.
                  </p>
                  <p className="mb-4">
                    By delivering content that educates, entertains, and
                    inspires, we help businesses maintain consistent engagement
                    with their audience.
                  </p>
                </section>

                {/* Driving Business Growth */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Driving Business Growth with Data-Driven Strategies
                  </h2>
                  <p className="mb-4">
                    At Next Media, our ultimate goal is delivering business
                    growth marketing solutions in Dubai. By combining analytics,
                    creative execution, and strategic planning, we help
                    businesses scale effectively, increase revenue, and maintain
                    a competitive edge.
                  </p>
                  <p className="mb-4">
                    Every campaign is designed to deliver measurable results,
                    ensuring your marketing investment generates real business
                    value.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                  <p className="mb-4">
                    Choosing a comprehensive digital marketing agency is no
                    longer optional—it's essential for businesses aiming to
                    thrive in the fast-paced digital era. Next Media offers
                    end-to-end digital marketing services in Dubai that combine
                    creativity, strategy, and technology to deliver measurable
                    results.
                  </p>
                  <p className="">
                    Partner with us to craft innovative campaigns, engage your
                    audience meaningfully, and achieve sustainable growth. With
                    Next Media as your strategic partner, your brand is equipped
                    to navigate the complexities of the digital landscape and
                    emerge stronger, smarter, and more visible than ever.
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
