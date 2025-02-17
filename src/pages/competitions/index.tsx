import { Heading, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { CompetitionCard, PageMetadata } from '../../components/UI/';

import { ATTACKATHON_URL } from '../../constants';

const Bounties: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Competitions'
        description='Security competitions the Ethereum Foundation wants to highlight'
      />

      <main>
        <Heading as='h1' mb={10}>
          Competitions
        </Heading>

        <Stack spacing={4}>
          <CompetitionCard
            url={ATTACKATHON_PECTRA_URL}
            title='Attackathon | Pectra'
            postedBy='Ethereum Foundation and Cantina'
            rewardsPool='$2,000,000 USD'
            startDate='21 February 2025 12:00 UTC'
            endDate='21 March 2025 00:00 UTC'
          >
            Competition targeting Pectra specific client code and specifications.
          </CompetitionCard>
          
          <CompetitionCard
            url={ATTACKATHON_URL}
            title='Attackathon | Ethereum Protocol'
            postedBy='Ethereum Foundation and Immunefi'
            rewardsPool='$1,500,000 USD'
            startDate='25 November 2024 14:00 UTC'
            endDate='20 January 2025 14:00 UTC'
          >
            Competition targeting the entire Ethereum Protocol.
          </CompetitionCard>
        </Stack>
      </main>
    </>
  );
};

export default Bounties;
