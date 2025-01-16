import { Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Home: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Home'
        description='Protocol Security at the Ethereum Foundation'
      />

      <main>
        <Heading as='h1' mb={10}>
          Protocol Security at the Ethereum Foundation
        </Heading>

        <Text mb={6}>
          The Protocol Security Research team is one piece of the large puzzle that helps safeguard
          Ethereum's integrity. It is a public good team funded by the Ethereum Foundation with ~10
          people who each possess different areas of expertise and experience.
        </Text>

        <Text mb={6}>
          Through coordination, meticulous code reviews, developing and utilizing advanced tooling,
          and running real-world simulations, our focus is on securing the network and its critical
          components. Our hands-on approach includes managing the bug bounty program, continuously
          monitoring the network, and collaborating with client teams and many other teams in the
          ecosystem.
        </Text>

        <Text>
          We're committed to identifying and mitigating risks to Ethereum network. The Protocol
          Security Research team is often not the most visible team in public, both due to the
          nature of what we work on, but also as we primarily try to help empower people in the
          ecosystem.
        </Text>
      </main>
    </>
  );
};

export default Home;
