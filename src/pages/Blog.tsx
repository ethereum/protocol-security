import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface InternalPostMeta {
  title: string;
  date: string;
}

interface InternalPost {
  slug: string;
  frontmatter: InternalPostMeta;
}

const externalLinks = [
  {
    title: 'ETH Rangers Program',
    date: '2024-12-02',
    link: 'https://blog.ethereum.org/2024/12/02/ethrangers-public-goods'
  },
  {
    title: 'Ethereum Protocol Attackathon Announcement',
    date: '2024-11-25',
    link: 'https://blog.ethereum.org/2024/11/25/ethereum-protocol-attackathon'
  },
  {
    title: 'Secured #6 - Writing Robust C - Best Practices for Finding and Preventing Vulnerabilities',
    date: '2023-11-02',
    link: 'https://blog.ethereum.org/2023/11/02/writing-robust-c'
  },
  {
    title: 'Secured #5 - Public Vulnerability Disclosures',
    date: '2023-05-03',
    link: 'https://blog.ethereum.org/2023/05/03/secured-5-disclosures-update'
  },
  {
    title: 'Secured #4 - Bug Bounty Rewards to $250,000',
    date: '2022-05-16',
    link: 'https://blog.ethereum.org/2022/05/16/secured-no-4'
  },
  {
    title: 'Secured #3 - Security Teams',
    date: '2022-04-22',
    link: 'https://blog.ethereum.org/2022/04/14/secured-no-3'
  },
  {
    title: 'Secured #2 - Public Vulnerability Disclosures',
    date: '2022-03-09',
    link: 'https://blog.ethereum.org/2022/03/09/secured-no-2'
  },
  {
    title: 'Secured #1 - BLS is Everywhere',
    date: '2021-09-09',
    link: 'https://blog.ethereum.org/2021/09/09/secured-no-1'
  },  
];

function sortByDate(a: { date: string }, b: { date: string }) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

const Blog: React.FC = () => {
  const [internalPosts, setInternalPosts] = useState<InternalPost[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    // Vite's import.meta.glob for markdown files
    const modules = import.meta.glob('/src/posts/*.md', { eager: true });
    const posts: InternalPost[] = Object.entries(modules).map(([file, mod]: any) => {
      const slug = file.split('/').pop()?.replace('.md', '') || '';
      const frontmatter = mod.frontmatter || {};
      return { slug, frontmatter };
    });
    setInternalPosts(posts);
  }, []);

  const allPosts = [
    ...internalPosts.map(post => ({
      type: 'internal' as const,
      slug: post.slug,
      title: post.frontmatter.title,
      date: post.frontmatter.date,
    })),
    ...externalLinks.map(post => ({
      type: 'external' as const,
      link: post.link,
      title: post.title,
      date: post.date,
    })),
  ].sort(sortByDate);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container max-w-2xl mx-auto pt-24 pb-16">
        <div className="space-y-4">
          {allPosts.map((post, i) => {
            const iconColor = hovered === i ? "bg-red-500/10 text-red-500" : "bg-muted text-muted-foreground";
            return (
              <div
                key={post.type === 'internal' ? post.slug : post.link}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {post.type === 'internal' ? (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block p-4 rounded border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${iconColor}`}>
                        <FileText className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="text-lg font-semibold text-foreground mb-1 flex items-center">
                          {post.title}
                        </div>
                        <div className="text-sm text-muted-foreground">{post.date}</div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${iconColor}`}>
                        <FileText className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="text-lg font-semibold text-foreground mb-1 flex items-center">
                          {post.title} <span className="text-xs ml-1">↗</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{post.date}</div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog; 