# Protocol Security Research Team
<img width="64" alt="logo" src="https://github.com/user-attachments/assets/ff81a5b7-36fd-4bf5-9828-b2e8a7a7e792">

The Protocol Security Research team is one piece of the large puzzle that helps safeguard Ethereum’s integrity. It is a public good team funded by the Ethereum Foundation with ~10 people who each possess different areas of expertise and experience. Through coordination, meticulous code reviews, developing and utilizing advanced tooling, and running real-world simulations, our focus is on securing the network and its critical components. Our hands-on approach includes managing the bug bounty program, continuously monitoring the network, and collaborating with client teams and many other teams in the ecosystem. We’re committed to help identifying and mitigating risks to Ethereum network. The Protocol Security Research team is often not the most visible team in public, both due to the nature of what we work on, but also as we primarily try to help empower people in the ecosystem.


## Coordination & Collaboration
We spend time coordinating and and collaborating with many parts of the ecosystem in order to further help keep Ethereum safe. Some of the things we do are:
- Vulnerability coordination and collaboration with L2s, L1s, critical dependencies and more for security issues 
- Protocol Security call series
- Coordination and collaboration with external security auditors for protocol related audits
- Security coordination and collaboration with client teams and critical dependencies
- Coordination and collaboration with researchers from the Ethereum ecosystem, Academia and Security
- Collaboration with teams such as Devops and Testing
- On-going collaboration and support for grantees
- Support public good projects related to security
- Writing the "Secured" series on the [EF Blog](https://blog.ethereum.org)


### Bug Bounty Program
The Protocol Security Research team manage the [Ethereum Foundation Bug Bounty Program](https://bounty.ethereum.org). We receive reports, triage, provide input, pay bounty rewards and coordinate public disclosures. The bug bounty program cover the Protocol, Clients, the Solidity compiler and more.

We also keep a public repository of [past results](https://github.com/ethereum/public-disclosures/)


## Grants
We feel that providing resources and funding to security grants is impactful and valuable to the ecosystem. In our opinion, providing funding is often critical, however we also provide our own time as a resource in order to further help projects be successful. Some of the grants we work on are:
- Provide and support Academic Grants through [funding and resources](https://blog.ethereum.org/2023/06/28/academic-grants-round-23)
- We are an active supporte of the [Ethereum Protocol Fellowship](https://github.com/eth-protocol-fellows/cohort-five/blob/main/projects/project-ideas.md#protocol-security) by providing resources
- We provide resources for the [Devcon(nect) Scholars](https://blog.ethereum.org/2023/06/26/devconnect-instanbul-scholars)
- We provide funding and resources for General Security Grants
    - Grants for various security efforts, such as [The Red Guild](https://blog.theredguild.org/about/), [Security Alliance](https://securityalliance.org/), or fuzzers created by external people such as [Guido Vranken](https://guidovranken.com/)


## Fuzzing
There is a finite amount of time for manual audits, so we build, maintain and use fuzzers to increase the likelihood of finding vulnerabilities. Many severe vulnerabilities have been found by these fuzzers, and then patched by client teams before they could be found and exploited by a malicious actor.
- Execution Layer
    - [goevmlab](https://github.com/holiman/goevmlab/)
    - [tx-fuzz](https://github.com/MariusVanDerWijden/tx-fuzz)
    - [FuzzyVM](https://github.com/MariusVanDerWijden/FuzzyVM)
    - [merge-fuzz](https://github.com/MariusVanDerWijden/merge-fuzz)
    - [Nosy](https://github.com/infosecual/nosy)
    - Various cryptography & EVM fuzzers
    - Private fuzzers
- Consensus Layer
    - [Nosy](https://github.com/infosecual/nosy)
    - Private fuzzers
- Solidity Compiler
    - Private fuzzers
- Network Layer (devp2p (discv4, discv5, ENR, RLP, ...), libp2p)
    - Private fuzzers
- JSON-RPC
    - Private fuzzer
- Account Abstraction
    - Private fuzzer
- Full Stack
    - [Attacknet](https://github.com/crytic/attacknet) (built from grant)
    - [Antithesis]() (service provider)
- Cryptographic libraries
    - [kzgfuzz](https://github.com/jtraglia/kzg-fuzz)
    - [kzg differential fuzzer](https://github.com/ethereum/c-kzg-4844/tree/main/fuzz)
- Critical Dependencies
    - Private Fuzzers


## Manual Reviews
We spend a lot of time manually reviewing specifications, clients and critical dependencies. Upcoming changes for hardforks are always being continually reviewed and prioritized.
- Specifications ([EL](https://github.com/ethereum/execution-specs) / [CL](https://github.com/ethereum/consensus-specs))
- Clients
    - [Besu](https://github.com/hyperledger/besu/)
    - [Erigon](https://github.com/ledgerwatch/erigon)
    - [Geth](https://github.com/ethereum/go-ethereum/)
    - [Lighthouse](https://github.com/sigp/lighthouse/)
    - [Lodestar](https://github.com/ChainSafe/lodestar/)
    - [Nimbus](https://github.com/status-im/nimbus-eth2)
    - [Nethermind](https://github.com/NethermindEth/nethermind/)
    - [Prysm](https://github.com/prysmaticlabs/prysm/)
    - [Teku](https://github.com/Consensys/teku)
    - [Reth](https://github.com/paradigmxyz/reth/)
    - [Grandine](https://github.com/grandinetech/grandine)
- Network libraries
    - [devp2p](https://github.com/ethereum/devp2p/)
    - [libp2p](https://github.com/libp2p)
- Hardforks
    - CL / EL side
- EIPs
    - EOF
    - 4444
    - PeerDAS
    - 7702 (txpool)
    - ...
- Critical Dependencies
- Static Analysis
- Cryptographic libraries


### Research
Many hours are spent on security research related to the Ethereum ecosystem. As a some of this research could potentially pose a threat, the specific research results may often not end up as public research, but the outcome of the research is rather used to help further secure the Ethereum ecosystem through improvements. A few examples of research topics are:
- Client Diversity
- /dev/random Diversity
- ZK security research
- Threat Analysis
- Risk Assessments
- L2s
- Cryptography
