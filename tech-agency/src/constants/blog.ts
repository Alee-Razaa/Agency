export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  readTime: string;
  content: string;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "building-ai-agents-with-nextjs-15",
    title: "Building Autonomous AI Agents with Next.js 15 and LangChain",
    description: "Learn how to architect and deploy production-ready AI agents using the latest Next.js features and LangChain.js.",
    date: "2024-05-15",
    author: {
      name: "Alex River",
      role: "Lead Architect",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    },
    category: "AI & Automation",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    tags: ["Next.js", "AI", "LangChain", "TypeScript"],
    content: `
      <h2>The Rise of Autonomous Agents</h2>
      <p>Autonomous agents are transforming how we think about software. Instead of rigid logic, we're building systems that can reason, plan, and execute tasks based on high-level goals.</p>

      <h3>Why Next.js 15?</h3>
      <p>Next.js 15 provides the perfect foundation for AI applications with its improved Server Actions, enhanced streaming capabilities, and the new React Compiler support which ensures optimal performance for complex UI states.</p>

      <pre><code>// Example Server Action for AI Processing
async function processAgentTask(input: string) {
  'use server';
  const result = await agent.invoke({ input });
  return result;
}</code></pre>

      <h3>Architecting the Agent</h3>
      <p>A typical agent architecture involves three main components: Perception, Brain (LLM), and Action (Tools). In our implementation, we use LangChain to orchestrate these components seamlessly.</p>
    `,
  },
  {
    id: "2",
    slug: "mastering-tailwind-v4-for-enterprise",
    title: "Mastering Tailwind CSS v4: Advanced Configuration & Design Systems",
    description: "Deep dive into the new CSS-first configuration in Tailwind v4 and how to build scalable enterprise design systems.",
    date: "2024-05-10",
    author: {
      name: "Sarah Chen",
      role: "Design Lead",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    },
    category: "Design Systems",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&auto=format&fit=crop&q=80",
    tags: ["Tailwind CSS", "CSS", "Design"],
    content: `
      <h2>CSS-First Configuration</h2>
      <p>Tailwind CSS v4 introduces a paradigm shift by moving configuration directly into your CSS files using the @theme directive. This simplifies the build pipeline and brings Tailwind closer to native CSS.</p>

      <h3>Defining Theme Variables</h3>
      <p>Instead of a tailwind.config.js file, you now define your theme directly in your main CSS entry point:</p>

      <pre><code>@theme {
  --color-primary: #3b82f6;
  --font-display: 'Inter', sans-serif;
}</code></pre>

      <p>These variables automatically generate corresponding utility classes like <code>bg-primary</code> and <code>font-display</code>.</p>
    `,
  },
  {
    id: "3",
    slug: "future-of-seo-aeo-in-the-generative-era",
    title: "The Future of SEO: Optimizing for Answer Engine Optimization (AEO)",
    description: "How to adapt your content strategy for LLM-based search engines like Perplexity, ChatGPT, and Google Gemini.",
    date: "2024-05-05",
    author: {
      name: "Marcus Thorne",
      role: "SEO Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    },
    category: "Digital Strategy",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    tags: ["SEO", "AEO", "Marketing", "AI"],
    content: `
      <h2>Beyond Blue Links</h2>
      <p>Search is evolving from a list of links to a direct answer interface. AEO is the practice of structuring your information so that AI models can easily cite and surface it as a primary answer.</p>

      <h3>Key AEO Strategies</h3>
      <ul>
        <li>Semantic JSON-LD schemas</li>
        <li>Direct, authoritative answer blocks</li>
        <li>Clear information hierarchy</li>
        <li>High-quality citations and data sources</li>
      </ul>
    `,
  }
];
