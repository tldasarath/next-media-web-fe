import Head from 'next/head';
import Link from 'next/link';
import { blogs } from '@/datas/blog';
import ShinyText from '../animations/ShinyText';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      <div className="   pt-15 container-custom">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <ShinyText text="Our Blogs" disabled={false} speed={2.3} />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <article
                key={post.id}
                className="bg-white/30 rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="relative h-72 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>

                <div className="p-6">
                  {/* Category and Read Time */}

                  {/* Title */}
                  <h2 className="text-xl font-bold  mb-3 line-clamp-2">
                    <Link
                      href={post.href}
                      className="hover:text-pink-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className=" mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Author and Date */}
                  {/* <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div> */}

                  {/* Read More Button */}
                  {/* <Link 
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Read More
                  </Link> */}
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
