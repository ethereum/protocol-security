import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface WishlistItem {
  title: string;
  content: string;
}

const wishlistItems: WishlistItem[] = [
  {
    title: "Differential LLMing",
    content: "A tool using LLMs to analyze implementations of EIPs and consensus-specs between the different clients to find differences in implementation."
  },
  {
    title: "LLM Test Generation",
    content: "A tool using LLMs to generate relevant missing test cases for the EL and CL specs."
  }
];

export default function Wishlist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 p-6 rounded-lg border border-border/40 bg-secondary/20">
              <p className="text-muted-foreground text-lg">
                This isn't a public RFP document. This is purely a wishlist of tools that the team would find interesting.
              </p>
              <p className="text-muted-foreground text-lg mt-2">
                This repo is meant to hold ideas for tooling that we would love to see someday.
              </p>
            </div>
            
            <div className="grid gap-8">
              {wishlistItems.map((item, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all"
                >
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold text-foreground group-hover:text-red-500 transition-colors mb-4">
                      {item.title}
                    </h2>
                    
                    <p className="text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
