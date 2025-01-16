import { Box, Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Box 
      as="footer"
      pt={8}
    >
      <Stack spacing={4} alignItems={{ base: 'center', md: 'flex-start' }}>
        <Link
          href='mailto:security@ethereum.org'
          display="inline-flex"
          alignItems="center"
          color="gray.500"
          fontSize="md"
          _hover={{ 
            color: 'primary',
            textDecoration: 'none'
          }}
          transition="color 0.2s"
        >
          <Box as="span" mr={2}>📧</Box>
          security@ethereum.org
        </Link>
        
        <Text 
          color="gray.500" 
          fontSize="sm"
        >
          © {new Date().getFullYear()} Ethereum Foundation. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};
