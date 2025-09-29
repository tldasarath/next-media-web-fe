import Image from 'next/image';
import Link from 'next/link';

export default function DigitalMarketing() {
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
                  Best Digital Marketing Agency in Dubai: Elevate Your Brand
                  with Next Media
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
                    src="/images/blogs/digital-marketing.png" // Update with your actual image path
                    alt="Digital Marketing Agency in Dubai - Next Media"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-center text-sm mt-2">
                  Next Media - Leading Digital Marketing Agency in Dubai
                </p>
              </div>

              {/* Content Section */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p className="mb-4">
                    In the bustling metropolis of Dubai, businesses are
                    constantly vying for attention in a saturated market. To
                    stand out, partnering with the best digital marketing agency
                    in Dubai is essential. At Next Media, we specialize in
                    crafting tailored strategies that elevate brands, enhance
                    online presence, and drive measurable results.
                  </p>
                </section>

                {/* Top Creative Agency */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Top Creative Agency in Dubai UAE
                  </h2>
                  <p className="mb-4">
                    As a top creative agency in Dubai UAE, we understand the
                    power of innovative design and compelling narratives. Our
                    team of experts collaborates closely with clients to develop
                    creative solutions that resonate with target audiences,
                    ensuring brand messages are both impactful and memorable.
                  </p>
                </section>

                {/* Web and Media Production */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Web and Media Production Company Dubai
                  </h2>
                  <p className="mb-4">
                    In today's digital age, high-quality content is paramount.
                    As a leading web and media production company in Dubai, Next
                    Media offers a comprehensive suite of services, including
                    website development, video production, and multimedia
                    content creation, all designed to engage and inform your
                    audience effectively.
                  </p>
                </section>

                {/* Branding and Advertising */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold  mb-4">
                    Branding and Advertising Solutions Dubai
                  </h2>
                  <p className="mb-4">
                    Establishing a strong brand identity is crucial for success.
                    Our branding and advertising solutions in Dubai encompass
                    logo design, brand strategy, and advertising campaigns that
                    not only capture attention but also foster trust and loyalty
                    among consumers.
                  </p>
                </section>

                {/* Integrated Marketing */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Integrated Marketing Agency Dubai
                  </h2>
                  <p className="mb-4">
                    An integrated approach ensures consistency across all
                    marketing channels. As an integrated marketing agency in
                    Dubai, we synchronize digital, social, and traditional
                    marketing efforts to deliver cohesive and effective
                    campaigns that drive results.
                  </p>
                </section>

                {/* GCC Businesses */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Marketing Agency for GCC Businesses
                  </h2>
                  <p className="mb-4">
                    Understanding the nuances of the GCC market is vital. As a
                    marketing agency for GCC businesses, Next Media tailors
                    strategies that cater to the unique cultural and economic
                    dynamics of the region, ensuring your brand resonates with
                    local audiences.
                  </p>
                </section>

                {/* End-to-End Services */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    End-to-End Digital Marketing Services Dubai
                  </h2>
                  <p className="mb-4">
                    From strategy development to execution, we provide
                    end-to-end digital marketing services in Dubai. Our
                    comprehensive approach includes SEO, PPC, social media
                    marketing, and analytics, all aimed at achieving sustainable
                    growth for your business.
                  </p>
                </section>

                {/* Web Development and Branding */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Professional Web Development and Branding Dubai
                  </h2>
                  <p className="mb-4">
                    A well-designed website is the cornerstone of online
                    success. Our professional web development and branding
                    services in Dubai focus on creating user-friendly,
                    responsive websites that reflect your brand's ethos and
                    engage visitors effectively.
                  </p>
                </section>

                {/* Content Marketing */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Content Marketing and Media Production Dubai
                  </h2>
                  <p className="mb-4">
                    Compelling content drives engagement. Our content marketing
                    and media production services in Dubai include blog writing,
                    video production, and social media content creation, all
                    designed to inform, entertain, and convert your audience.
                  </p>
                </section>

                {/* Business Growth */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Business Growth Marketing Solutions Dubai
                  </h2>
                  <p className="mb-4">
                    At Next Media, we are committed to delivering business
                    growth marketing solutions in Dubai. By leveraging
                    data-driven strategies and creative execution, we help
                    businesses scale, increase revenue, and achieve long-term
                    success.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                  <p className="">
                    Choosing the right digital marketing agency is pivotal for
                    business success in Dubai. Next Media offers a comprehensive
                    suite of services designed to elevate your brand, engage
                    your audience, and drive measurable results. Partner with us
                    to navigate the complexities of the digital landscape and
                    achieve sustainable growth.
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
