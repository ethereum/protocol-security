import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar } from 'lucide-react';

interface Competition {
    name: string;
    description: string;
    link: string;
    pool: string;
    startDate: string;
    endDate: string;
    platform: string;
}

const competitions: Competition[] = [
    {
        name: 'Audit Contest | Fusaka',
        description: ' Competition targeting Fusaka specific client code and specifications',
        link: 'https://sherlock.xyz/ethereumfusakacontest',
        pool: '2,000,000 USD',
        startDate: '15 September 2025',
        endDate: '13 October 2025',
        platform: '/images/sherlock.jpeg',
    },
    {
        name: 'Attackathon | Pectra',
        description: ' Competition targeting Fusaka specific client code and specifications',
        link: 'https://cantina.xyz/competitions/pectra',
        pool: '2,000,000 USD',
        startDate: '21 February 2025',
        endDate: '21 March 2025',
        platform: '/images/cantina.svg',
  },
  {
        name: 'Attackathon | Ethereum Protocol',
        description: ' Competition targeting the entire Ethereum protocol',
        link: 'https://immunefi.com/audit-competition/ethereum-protocol-attackathon/information/',
        pool: '1,500,000 USD',
        startDate: '25 November 2024',
        endDate: '20 January 2025',
        platform: '/images/immunefi.png',
  }
];

export default function Competitions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {competitions.map((competition, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all"
                >
                  <div className="flex items-center">
                    <div className="flex flex-col items-center justify-center w-12 mr-6">
                      {competition.platform && (
                        <div className="flex items-center justify-center h-full">
                          <img
                            src={`${import.meta.env.BASE_URL}${competition.platform.replace('/', '')}`}
                            alt={competition.name}
                            className="w-30 h-30 object-contain mx-auto"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="w-px self-stretch bg-border/60 mx-4"></div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-foreground group-hover:text-red-500 transition-colors mb-4">
                        {competition.name}
                      </h2>
                      
                      <p className="text-muted-foreground mb-6">
                        {competition.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span 
                          className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground"
                        >
                          {competition.pool}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>Start: {competition.startDate}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>End: {competition.endDate}</span>
                      </div>
                      
                      <a 
                        href={competition.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-red-500 hover:text-red-600 hover:underline"
                      >
                        View Competition
                      </a>
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
