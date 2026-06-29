import { BLOG_POSTS } from '@/constants/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft, Share2 } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Tech Agency Blog`,
    description: post.description,
    openGraph: {
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const slug = (await params).slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Insights
        </Link>

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Badge text={post.category} className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-white font-medium">{post.author.name}</div>
                <div className="text-gray-500 text-sm">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden aspect-[21/9] relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-invert prose-primary max-w-none
              prose-headings:text-white prose-p:text-gray-400 prose-p:text-lg prose-p:leading-relaxed
              prose-a:text-primary hover:prose-a:text-primary/80
              prose-strong:text-white prose-code:text-primary prose-pre:bg-card/50 prose-pre:border prose-pre:border-border"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-card border border-border rounded-lg text-sm text-gray-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
