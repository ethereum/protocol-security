import { Box, Container, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Footer, Header } from '../UI';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Box as="header">
        <Header />
      </Box>

      <Container
        as="main"
        maxW={{ base: 'container.md', lg: 'container.lg', xl: 'container.xl' }}
        px={{ base: 6, md: 8, lg: 10 }}
        py={{ base: 12, lg: 16 }}
      >
        <Stack mt={{ base: 4, xl: 12 }} mb={32}>
          {children}
        </Stack>

        <Footer />
      </Container>
    </>
  );
};
