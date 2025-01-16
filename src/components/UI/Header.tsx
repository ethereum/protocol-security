import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import EFlogo from '../../../public/images/ef-logo.svg';

import { HOME_URL } from '../../constants';
import { Nav } from '../Nav';
import { ThemeToggle } from './ThemeToggle';

export const Header: FC = () => {
  return (
    <Container maxW={{ base: 'container.md', lg: 'container.lg', xl: 'container.xl' }} py={4}>
      <Flex 
        justifyContent='space-between' 
        alignItems='center'
        px={{ base: 4, md: 6 }}
      >
        <NextLink href={HOME_URL} passHref>
          <Box as="a" display="block" _hover={{ opacity: 0.8 }} transition="opacity 0.2s">
            <Image src={EFlogo} alt='Ethereum Foundation logo' height={55} width={161} priority />
          </Box>
        </NextLink>

        <HStack spacing={{ base: 2, md: 4 }}>
          <Nav />
          <ThemeToggle />
        </HStack>
      </Flex>
    </Container>
  );
};
