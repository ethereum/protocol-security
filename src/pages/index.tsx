import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <p className="text-lg mb-6 text-muted-foreground">
                The <span className="text-red-500 hover:text-red-700 transition-colors">Protocol Security Research</span> team is one piece of the large puzzle that helps safeguard Ethereum's integrity. 
                It is a public good team funded by the Ethereum Foundation with ~10 people who each possess different areas 
                of expertise and experience.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground">
                Through coordination, meticulous code reviews, developing and utilizing advanced tooling, and running 
                real-world simulations, our focus is on securing the network and its critical components. Our hands-on 
                approach includes managing the bug bounty program, continuously monitoring the network, and collaborating 
                with client teams and many other teams in the ecosystem.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground">
                We're committed to identifying and mitigating risks to Ethereum network. The <span className="text-red-500 hover:text-red-700 transition-colors">Protocol Security Research</span> team is often not the most visible team in public, both due to the nature of what we work on, but also 
                as we primarily try to help empower people in the ecosystem.
              </p>
            </section>
            
            <section id="contact" className="pt-8 border-t border-border/40">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                To report a vulnerability, please use the{' '}
                <a
                  href="https://ethereum.org/bug-bounty/#in-scope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-700 transition-colors font-medium"
                >
                  Bug Bounty Program
                </a>{' '}
                and review its scope before submitting.
              </p>
              <a
                href="https://bbp-form.ethereum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-red-500/10 hover:bg-red-500/20 border border-red-500/40 text-red-500 font-medium transition-colors"
              >
                Submit a Bug
              </a>
              <p className="text-lg mt-8 mb-4 text-muted-foreground">
                For other security-related inquiries, contact us at:
              </p>
              <a
                href="mailto:security@ethereum.org"
                className="text-xl font-medium text-red-500 hover:underline"
              >
                security@ethereum.org
              </a>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
