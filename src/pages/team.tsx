import { Heading, Link, Stack, Text } from '@chakra-ui/react';
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

        {/*
        <Text mb={12}>
          A description of the team.
        </Text>
        */}

        <Stack spacing={5}>
          <Stack>
            <Text>
              <Link
                href='https://github.com/0xTylerHolmes'
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                isExternal
              >
                <strong>Tyler Holmes</strong>
              </Link>{' '}
              -- TBD.
            </Text>
          </Stack>

          <Stack>
            <Text>
              <Link
                href='https://github.com/nethoxa'
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                isExternal
              >
                <strong>Andrés Láinez</strong>
              </Link>{' '}
              -- TBD.
            </Text>
          </Stack>

          <Stack>
            <Text>
              <Link
                href='https://github.com/bshastry'
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                isExternal
              >
                <strong>Bhargava Shastry</strong>
              </Link>{' '}
              -- TBD.
            </Text>
          </Stack>

          <Stack>
            <Text>
              <Link
                href='https://github.com/fredriksvantes'
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                isExternal
              >
                <strong>Fredrik Svantes</strong>
              </Link>{' '}
              -- Team lead; all things coordination; bug bounty program; and grants.
            </Text>
          </Stack>

          <Stack>
            <Text>
              <Link
                href='https://github.com/infosecual'
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                isExternal
              >
                <strong>David Theodore</strong>
              </Link>{' '}
              -- TBD;
            </Text>
          </Stack>

          <Stack>
            <Text>
              <Link
                href='https://github.com/asn-d6'
                color='brand.lightblue'
                _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
                isExternal
              >
                <strong>Justin Traglia</strong>
              </Link>{' '}
              -- Manual code review; consensus layer specs/clients; MEV-boost stack; and KZG libraries.
            </Text>
          </Stack>

        </Stack>
      </main>
    </>
  );
};

export default Team;
