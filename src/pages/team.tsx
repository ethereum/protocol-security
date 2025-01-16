import { Heading, Link, Stack, Text, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Team: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Team'
        description='About the Protocol Security Research team at the Ethereum Foundation'
      />

      <main>
        <Heading as='h1' mb={10}>
          Team
        </Heading>

        <Stack spacing={5}>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                Tyler Holmes
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com/0xTylerHolmes"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/0xTylerHolmes"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              Ethereum testnet bootstrapper, multiaddr libraries, kurtosis, and chaos fuzzing.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                Andrés Láinez
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com/nethoxa"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/nethoxa"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                {', '}
                <Link
                  href="https://nethoxa.notion.site/e32a2f46076f49c4bbb718e0309207c3?v=15f179505d3c4586a73265ed61ce2668"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Website
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              Execution layer clients, L2 zkEVM security, lending pools, and breaking things.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                Bhargava Shastry
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com/bshastry"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/ibags"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              Solidity compilers, fuzzing everything, and networking libraries.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                Fredrik Svantes
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com/fredriksvantes"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/fredriksvantes"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              Team lead, all things coordination, bug bounty program, and grants.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                David Theodore
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com/infosecual"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/infosecual"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              ZK security, automated fuzzing, Golang clients, validator safety, and holistic thinker.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Flex align="center">
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                Justin Traglia
              </Text>
              <Text as="span" ml={2} fontSize="lg">
                (
                <Link
                  href="https://github.com/jtraglia"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  GitHub
                </Link>
                {', '}
                <Link
                  href="https://x.com/JustinTraglia"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Twitter
                </Link>
                {', '}
                <Link
                  href="https://signal.me/#eu/nFqTWX1iPknqfQa93CuYl6iLjGyKylI3gTPq__SeNTkhGd3w1TBFZ5cwoRH7hFzI"
                  color="brand.lightblue"
                  _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                  isExternal
                >
                  Signal
                </Link>
                )
              </Text>
            </Flex>
            <Text>
              Manual code review, consensus layer specs/clients, MEV-boost stack, and KZG libraries.
            </Text>
          </Stack>

        </Stack>
      </main>
    </>
  );
};

export default Team;
