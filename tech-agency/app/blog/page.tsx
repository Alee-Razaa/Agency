import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/constants/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/Badge';

export const metadata = {
  title: 'Insights & Innovation | Tech Agency Blog',
  description: 'Deep dives into AI, full-stack development, and the future of digital commerce.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <Badge text="Resources" className="mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl text-gray-400">
            Exploring the intersection of artificial intelligence, high-performance web engineering, and digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-card/50 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-md border border-border rounded-full text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                  {post.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-border">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <span className="text-xs text-gray-400">{post.author.name}</span>
                  </div>
                  <span className="text-primary flex items-center gap-1 text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
