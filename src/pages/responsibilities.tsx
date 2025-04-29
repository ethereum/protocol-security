import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Responsibilities() {
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Coordination & Collaboration</h2>
              <p className="mb-4 text-muted-foreground">We spend time coordinating and collaborating with many parts of the ecosystem in order to further help keep Ethereum safe. Some of the things we do are:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Vulnerability coordination and collaboration with L2s, L1s, critical dependencies and more for security issues</li>
                <li><a href="https://blog.ethereum.org/category/security" className="text-red-500 hover:text-red-700 transition-colors">Protocol Security call series</a></li>
                <li>Coordination and collaboration with external security auditors for protocol related audits</li>
                <li>Security coordination and collaboration with client teams and critical dependencies</li>
                <li>Coordination and collaboration with researchers from the Ethereum ecosystem, academia and security</li>
                <li>Collaboration with teams such as EF Devops and EF Testing</li>
                <li>Ongoing collaboration and support for grantees</li>
                <li>Support public good projects related to security</li>
                <li><a href="https://blog.ethereum.org/category/security" className="text-red-500 hover:text-red-700 transition-colors">Writing the "Secured" series on the EF Blog</a></li>
                <li><a href="https://github.com/ethereum/attackathon" className="text-red-500 hover:text-red-700 transition-colors">Host security challenges such as the Ethereum Protocol Attackathon</a></li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Bug Bounty Program</h2>
              <p className="mb-4 text-muted-foreground">The Protocol Security Research team manages the <a href="https://ethereum.org/en/bug-bounty/" className="text-red-500 hover:text-red-700 transition-colors">Ethereum Foundation Bug Bounty Program</a>. We receive reports, triage, provide input, pay bounty rewards and coordinate public disclosures. The bug bounty program covers Ethereum specifications, Ethereum clients, the Solidity compiler and more.</p>
              <p className="mb-4 text-muted-foreground">We also keep a <a href="https://github.com/ethereum/public-disclosures" className="text-red-500 hover:text-red-700 transition-colors">public repository of past results</a>.</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Grants</h2>
              <p className="mb-4 text-muted-foreground">We feel that providing resources and funding to security grants is impactful and valuable to the ecosystem. In our opinion, providing funding is often critical, however we also provide our own time as a resource in order to further help projects be successful.</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and support <a href="https://esp.ethereum.foundation/" className="text-red-500 hover:text-red-700 transition-colors">Academic Grants</a> through funding and resources</li>
                <li>We support the <a href="https://fellowship.ethereum.foundation/" className="text-red-500 hover:text-red-700 transition-colors">Ethereum Protocol Fellowship</a> by providing resources</li>
                <li>We provide resources for the <a href="https://devcon.org/en/scholars/" className="text-red-500 hover:text-red-700 transition-colors">Devcon(nect) Scholars</a></li>
                <li>We provide funding and resources for General Security Grants including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><a href="https://theredguild.org/" className="text-red-500 hover:text-red-700 transition-colors">The Red Guild</a></li>
                    <li><a href="https://securityalliance.org/" className="text-red-500 hover:text-red-700 transition-colors">Security Alliance</a></li>
                    <li>Fuzzers created by external contributors like <a href="https://github.com/guidovranken" className="text-red-500 hover:text-red-700 transition-colors">Guido Vranken</a></li>
                  </ul>
                </li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Fuzzing</h2>
              <p className="mb-4 text-muted-foreground">There is a finite amount of time for manual audits, so we build, maintain and use fuzzers to increase the likelihood of finding vulnerabilities. Many severe vulnerabilities have been found by these fuzzers, and then patched by client teams before they could be found and exploited by a malicious actor.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Execution Layer</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://github.com/holiman/goevmlab" className="text-red-500 hover:text-red-700 transition-colors">goevmlab</a></li>
                <li><a href="https://github.com/MariusVanDerWijden/tx-fuzz" className="text-red-500 hover:text-red-700 transition-colors">tx-fuzz</a></li>
                <li><a href="https://github.com/MariusVanDerWijden/FuzzyVM" className="text-red-500 hover:text-red-700 transition-colors">FuzzyVM</a></li>
                <li><a href="https://github.com/MariusVanDerWijden/merge-fuzz" className="text-red-500 hover:text-red-700 transition-colors">merge-fuzz</a></li>
                <li><a href="https://github.com/ethereum/nosy" className="text-red-500 hover:text-red-700 transition-colors">Nosy</a></li>
                <li>Various cryptography & EVM fuzzers</li>
                <li>Private fuzzers</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Consensus Layer</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://github.com/ethereum/nosy" className="text-red-500 hover:text-red-700 transition-colors">Nosy</a></li>
                <li>Private fuzzers</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Full Stack</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://github.com/ethereum/attacknet" className="text-red-500 hover:text-red-700 transition-colors">Attacknet</a> (built from grant)</li>
                <li><a href="https://www.antithesis.com/" className="text-red-500 hover:text-red-700 transition-colors">Antithesis</a> (service provider)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Cryptographic Libraries</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://github.com/ethereum/kzgfuzz" className="text-red-500 hover:text-red-700 transition-colors">kzgfuzz</a></li>
                <li><a href="https://github.com/ethereum/kzg-differential-fuzzer" className="text-red-500 hover:text-red-700 transition-colors">kzg differential fuzzer</a></li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Manual Reviews</h2>
              <p className="mb-4 text-muted-foreground">We spend a lot of time manually reviewing specifications, clients and critical dependencies. Upcoming changes for hardforks are always being continually reviewed and prioritized.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Specifications</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://github.com/ethereum/execution-specs" className="text-red-500 hover:text-red-700 transition-colors">Execution Layer</a></li>
                <li><a href="https://github.com/ethereum/consensus-specs" className="text-red-500 hover:text-red-700 transition-colors">Consensus Layer</a></li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Clients</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://github.com/hyperledger/besu" className="text-red-500 hover:text-red-700 transition-colors">Besu</a></li>
                <li><a href="https://github.com/ledgerwatch/erigon" className="text-red-500 hover:text-red-700 transition-colors">Erigon</a></li>
                <li><a href="https://github.com/ethereum/go-ethereum" className="text-red-500 hover:text-red-700 transition-colors">Geth</a></li>
                <li><a href="https://github.com/sigp/lighthouse" className="text-red-500 hover:text-red-700 transition-colors">Lighthouse</a></li>
                <li><a href="https://github.com/ChainSafe/lodestar" className="text-red-500 hover:text-red-700 transition-colors">Lodestar</a></li>
                <li><a href="https://github.com/status-im/nimbus-eth2" className="text-red-500 hover:text-red-700 transition-colors">Nimbus</a></li>
                <li><a href="https://github.com/NethermindEth/nethermind" className="text-red-500 hover:text-red-700 transition-colors">Nethermind</a></li>
                <li><a href="https://github.com/prysmaticlabs/prysm" className="text-red-500 hover:text-red-700 transition-colors">Prysm</a></li>
                <li><a href="https://github.com/ConsenSys/teku" className="text-red-500 hover:text-red-700 transition-colors">Teku</a></li>
                <li><a href="https://github.com/paradigmxyz/reth" className="text-red-500 hover:text-red-700 transition-colors">Reth</a></li>
                <li><a href="https://github.com/grandinetech/grandine" className="text-red-500 hover:text-red-700 transition-colors">Grandine</a></li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Network Libraries</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://github.com/ethereum/devp2p" className="text-red-500 hover:text-red-700 transition-colors">devp2p</a></li>
                <li><a href="https://github.com/libp2p/libp2p" className="text-red-500 hover:text-red-700 transition-colors">libp2p</a></li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Research</h2>
              <p className="mb-4 text-muted-foreground">Many hours are spent on security research related to the Ethereum ecosystem. As some of this research could potentially pose a threat, the specific research results may often not end up as public research, but the outcome of the research is rather used to help further secure the Ethereum ecosystem through improvements.</p>
              <p className="mb-4 text-muted-foreground">Some examples of research topics include:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://clientdiversity.org/" className="text-red-500 hover:text-red-700 transition-colors">Client Diversity</a></li>
                <li>/dev/random Diversity</li>
                <li>ZK security research</li>
                <li>Threat Analysis</li>
                <li>Risk Assessments</li>
                <li>L2s</li>
                <li>Cryptography</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
