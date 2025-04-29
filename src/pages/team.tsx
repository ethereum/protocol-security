import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Github, Twitter, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  description: string;
  github?: string;
  twitter?: string;
  website?: string;
  signal?: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Tyler Holmes',
    description: 'Ethereum testnet bootstrapper, multiaddr libraries, kurtosis, and chaos fuzzing.',
    github: 'https://github.com/0xTylerHolmes',
    twitter: 'https://x.com/0xTylerHolmes',
    image: '/images/tyler.jpeg',
  },
  {
    name: 'Andrés Láinez',
    description: 'Execution layer clients and zkVMs.',
    github: 'https://github.com/nethoxa',
    twitter: 'https://x.com/nethoxa',
    website: 'https://nethoxa.github.io/',
    image: '/images/andres.jpeg',
  },
  {
    name: 'Bhargava Shastry',
    description: 'Solidity compilers, fuzzing everything, and networking libraries.',
    github: 'https://github.com/bshastry',
    twitter: 'https://x.com/ibags',
    image: '/images/bhargava.png',
  },
  {
    name: 'Fredrik Svantes',
    description: 'Team lead, all things coordination, bug bounty program, and grants.',
    github: 'https://github.com/fredriksvantes',
    twitter: 'https://x.com/fredriksvantes',
    image: '/images/fredrik.jpeg',
  },
  {
    name: 'David Theodore',
    description: 'ZK security, automated fuzzing, Golang clients, validator safety, and holistic thinker.',
    github: 'https://github.com/infosecual',
    twitter: 'https://x.com/infosecual',
    image: '/images/david.jpeg',
  },
  {
    name: 'Justin Traglia',
    description: 'Manual code review, consensus layer specs/clients, MEV-boost stack, and KZG libraries.',
    github: 'https://github.com/jtraglia',
    twitter: 'https://x.com/JustinTraglia',
    signal: 'https://signal.me/#eu/nFqTWX1iPknqfQa93CuYl6iLjGyKylI3gTPq__SeNTkhGd3w1TBFZ5cwoRH7hFzI',
    image: '/images/justin.png',
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all"
                >
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="w-px self-stretch bg-border/60 mx-4"></div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-foreground group-hover:text-red-500 transition-colors mb-2">
                        {member.name}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4">
                        {member.description}
                      </p>
                      
                      <div className="flex space-x-3">
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Github size={18} />
                          </a>
                        )}
                        {member.twitter && (
                          <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Twitter size={18} />
                          </a>
                        )}
                        {member.website && (
                          <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Globe size={18} />
                          </a>
                        )}
                      </div>
                    </div>
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
