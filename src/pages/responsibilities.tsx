import { Box, Heading, Link, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Responsibilities: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Responsibilities'
        description='Areas of work and responsibilities of the Protocol Security Research team'
      />

      <main>
        <Heading as='h1' mb={10}>
          Our Responsibilities
        </Heading>

        <VStack spacing={12} align="stretch">
          <Box>
            <Heading as='h2' size='lg' mb={6}>Coordination & Collaboration</Heading>
            <Text mb={4}>
              We spend time coordinating and collaborating with many parts of the ecosystem in order to further help keep Ethereum safe. Some of the things we do are:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Vulnerability coordination and collaboration with L2s, L1s, critical dependencies and more for security issues</ListItem>
              <ListItem>Protocol Security call series</ListItem>
              <ListItem>Coordination and collaboration with external security auditors for protocol related audits</ListItem>
              <ListItem>Security coordination and collaboration with client teams and critical dependencies</ListItem>
              <ListItem>Coordination and collaboration with researchers from the Ethereum ecosystem, academia and security</ListItem>
              <ListItem>Collaboration with teams such as EF Devops and EF Testing</ListItem>
              <ListItem>Ongoing collaboration and support for grantees</ListItem>
              <ListItem>Support public good projects related to security</ListItem>
              <ListItem>Writing the "Secured" series on the <Link href="https://blog.ethereum.org" color="brand.lightblue" isExternal>EF Blog</Link></ListItem>
              <ListItem>Host security challenges such as the <Link href="https://blog.ethereum.org/2024/07/08/attackathon" color="brand.lightblue" isExternal>Ethereum Protocol Attackathon</Link></ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={6}>Bug Bounty Program</Heading>
            <Text mb={4}>
              The Protocol Security Research team manages the <Link href="https://bounty.ethereum.org" color="brand.lightblue" isExternal>Ethereum Foundation Bug Bounty Program</Link>. 
              We receive reports, triage, provide input, pay bounty rewards and coordinate public disclosures. 
              The bug bounty program covers Ethereum specifications, Ethereum clients, the Solidity compiler and more.
            </Text>
            <Text>
              We also keep a public repository of <Link href="https://github.com/ethereum/public-disclosures/" color="brand.lightblue" isExternal>past results</Link>.
            </Text>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={6}>Grants</Heading>
            <Text mb={4}>
              We feel that providing resources and funding to security grants is impactful and valuable to the ecosystem. 
              In our opinion, providing funding is often critical, however we also provide our own time as a resource in order to further help projects be successful.
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>Provide and support Academic Grants through <Link href="https://blog.ethereum.org/2023/06/28/academic-grants-round-23" color="brand.lightblue" isExternal>funding and resources</Link></ListItem>
              <ListItem>We support the <Link href="https://github.com/eth-protocol-fellows/cohort-five/blob/main/projects/project-ideas.md#protocol-security" color="brand.lightblue" isExternal>Ethereum Protocol Fellowship</Link> by providing resources</ListItem>
              <ListItem>We provide resources for the <Link href="https://blog.ethereum.org/2023/06/26/devconnect-instanbul-scholars" color="brand.lightblue" isExternal>Devcon(nect) Scholars</Link></ListItem>
              <ListItem>We provide funding and resources for General Security Grants including:
                <UnorderedList spacing={2} pl={4} mt={2}>
                  <ListItem><Link href="https://blog.theredguild.org/about/" color="brand.lightblue" isExternal>The Red Guild</Link></ListItem>
                  <ListItem><Link href="https://securityalliance.org/" color="brand.lightblue" isExternal>Security Alliance</Link></ListItem>
                  <ListItem>Fuzzers created by external contributors like <Link href="https://guidovranken.com/" color="brand.lightblue" isExternal>Guido Vranken</Link></ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={6}>Fuzzing</Heading>
            <Text mb={4}>
              There is a finite amount of time for manual audits, so we build, maintain and use fuzzers to increase the likelihood of finding vulnerabilities. 
              Many severe vulnerabilities have been found by these fuzzers, and then patched by client teams before they could be found and exploited by a malicious actor.
            </Text>
            <Stack spacing={6}>
              <Box>
                <Heading as='h3' size='md' mb={3}>Execution Layer</Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem><Link href="https://github.com/holiman/goevmlab/" color="brand.lightblue" isExternal>goevmlab</Link></ListItem>
                  <ListItem><Link href="https://github.com/MariusVanDerWijden/tx-fuzz" color="brand.lightblue" isExternal>tx-fuzz</Link></ListItem>
                  <ListItem><Link href="https://github.com/MariusVanDerWijden/FuzzyVM" color="brand.lightblue" isExternal>FuzzyVM</Link></ListItem>
                  <ListItem><Link href="https://github.com/MariusVanDerWijden/merge-fuzz" color="brand.lightblue" isExternal>merge-fuzz</Link></ListItem>
                  <ListItem><Link href="https://github.com/infosecual/nosy" color="brand.lightblue" isExternal>Nosy</Link></ListItem>
                  <ListItem>Various cryptography & EVM fuzzers</ListItem>
                  <ListItem>Private fuzzers</ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Heading as='h3' size='md' mb={3}>Consensus Layer</Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem><Link href="https://github.com/infosecual/nosy" color="brand.lightblue" isExternal>Nosy</Link></ListItem>
                  <ListItem>Private fuzzers</ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Heading as='h3' size='md' mb={3}>Full Stack</Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem><Link href="https://github.com/crytic/attacknet" color="brand.lightblue" isExternal>Attacknet</Link> (built from grant)</ListItem>
                  <ListItem>Antithesis (service provider)</ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Heading as='h3' size='md' mb={3}>Cryptographic Libraries</Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem><Link href="https://github.com/jtraglia/kzg-fuzz" color="brand.lightblue" isExternal>kzgfuzz</Link></ListItem>
                  <ListItem><Link href="https://github.com/ethereum/c-kzg-4844/tree/main/fuzz" color="brand.lightblue" isExternal>kzg differential fuzzer</Link></ListItem>
                </UnorderedList>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={6}>Manual Reviews</Heading>
            <Text mb={4}>
              We spend a lot of time manually reviewing specifications, clients and critical dependencies. 
              Upcoming changes for hardforks are always being continually reviewed and prioritized.
            </Text>
            <Stack spacing={6}>
              <Box>
                <Heading as='h3' size='md' mb={3}>Specifications</Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem><Link href="https://github.com/ethereum/execution-specs" color="brand.lightblue" isExternal>Execution Layer</Link></ListItem>
                  <ListItem><Link href="https://github.com/ethereum/consensus-specs" color="brand.lightblue" isExternal>Consensus Layer</Link></ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Heading as='h3' size='md' mb={3}>Clients</Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem><Link href="https://github.com/hyperledger/besu/" color="brand.lightblue" isExternal>Besu</Link></ListItem>
                  <ListItem><Link href="https://github.com/ledgerwatch/erigon" color="brand.lightblue" isExternal>Erigon</Link></ListItem>
                  <ListItem><Link href="https://github.com/ethereum/go-ethereum/" color="brand.lightblue" isExternal>Geth</Link></ListItem>
                  <ListItem><Link href="https://github.com/sigp/lighthouse/" color="brand.lightblue" isExternal>Lighthouse</Link></ListItem>
                  <ListItem><Link href="https://github.com/ChainSafe/lodestar/" color="brand.lightblue" isExternal>Lodestar</Link></ListItem>
                  <ListItem><Link href="https://github.com/status-im/nimbus-eth2" color="brand.lightblue" isExternal>Nimbus</Link></ListItem>
                  <ListItem><Link href="https://github.com/NethermindEth/nethermind/" color="brand.lightblue" isExternal>Nethermind</Link></ListItem>
                  <ListItem><Link href="https://github.com/prysmaticlabs/prysm/" color="brand.lightblue" isExternal>Prysm</Link></ListItem>
                  <ListItem><Link href="https://github.com/Consensys/teku" color="brand.lightblue" isExternal>Teku</Link></ListItem>
                  <ListItem><Link href="https://github.com/paradigmxyz/reth/" color="brand.lightblue" isExternal>Reth</Link></ListItem>
                  <ListItem><Link href="https://github.com/grandinetech/grandine" color="brand.lightblue" isExternal>Grandine</Link></ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Heading as='h3' size='md' mb={3}>Network Libraries</Heading>
                <UnorderedList spacing={2} pl={4}>
                  <ListItem><Link href="https://github.com/ethereum/devp2p/" color="brand.lightblue" isExternal>devp2p</Link></ListItem>
                  <ListItem><Link href="https://github.com/libp2p" color="brand.lightblue" isExternal>libp2p</Link></ListItem>
                </UnorderedList>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={6}>Research</Heading>
            <Text mb={4}>
              Many hours are spent on security research related to the Ethereum ecosystem. As some of this research could potentially pose a threat, 
              the specific research results may often not end up as public research, but the outcome of the research is rather used to help further 
              secure the Ethereum ecosystem through improvements.
            </Text>
            <Text>Some examples of research topics include:</Text>
            <UnorderedList spacing={2} pl={4} mt={2}>
              <ListItem>Client Diversity</ListItem>
              <ListItem>/dev/random Diversity</ListItem>
              <ListItem>ZK security research</ListItem>
              <ListItem>Threat Analysis</ListItem>
              <ListItem>Risk Assessments</ListItem>
              <ListItem>L2s</ListItem>
              <ListItem>Cryptography</ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </main>
    </>
  );
};

export default Responsibilities;
