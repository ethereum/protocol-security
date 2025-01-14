import { Heading, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Event, PageMetadata } from '../components/UI';

const Events: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Events'
        description='View upcoming and past security events in the Ethereum ecosystem'
      />

      <main>
        <Heading as='h1' mb={10}>
          Events
        </Heading>

        <Stack mb={6} spacing={8}>

          {/*
          <Event
            conference='Name, Location'
            workshop='Name'
            url='link'
          >
            Description
          </Event>
          */}

        </Stack>
      </main>
    </>
  );
};

export default Events;
