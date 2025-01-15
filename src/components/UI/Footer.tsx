import { Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer>
      <Stack>
        <Text>
          <Link
            href='mailto:security@ethereum.org'
            textDecoration='underline'
            color='gray.500'
            _hover={{ color: 'brand.blue' }}
          >
            security@ethereum.org
          </Link>
        </Text>
        <Text>{`© ${new Date().getFullYear()} Ethereum Foundation. All rights reserved.`}</Text>
      </Stack>
    </footer>
  );
};
