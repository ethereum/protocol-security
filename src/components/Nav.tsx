import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  IconButton,
  Link,
  Menu,
  MenuButton,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

import { CloseIcon, HamburgerIcon } from './UI/icons';

import { isLastItem } from '../utils';

import { NAV_LINKS } from '../constants';

export const Nav: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        mb={{ base: 2, md: 10, xl: 0 }}
        alignItems='flex-end'
        display={{ base: 'none', md: 'block' }}
      >
        <Wrap listStyleType='none' ml={0}>
          {NAV_LINKS.map(({ href, text }, idx) => (
            <WrapItem display='inline' key={href}>
              <NextLink href={href} passHref>
                <Link
                  href={href}
                  position="relative"
                  color='gray.500'
                  mr={isLastItem(idx, NAV_LINKS.length) ? 0 : 3}
                  _hover={{ 
                    textDecoration: 'none',
                    color: 'primary'
                  }}
                  transition="color 0.2s"
                >
                  {text}
                </Link>
              </NextLink>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>

      <Box display={{ base: 'block', md: 'none' }}>
        <Box mt={2}>
          <Menu id='menu-button'>
            {!isOpen && (
              <MenuButton
                as={IconButton}
                aria-label='Menu'
                variant='transparent'
                icon={<HamburgerIcon h='25px' w='32px' />}
                onClick={onOpen}
              />
            )}

            {isOpen && (
              <MenuButton
                as={IconButton}
                aria-label='Close menu'
                variant='transparent'
                icon={<CloseIcon h='28px' w='28px' />}
                onClick={onClose}
                zIndex={9999}
              />
            )}
          </Menu>
        </Box>

        <Drawer onClose={onClose} isOpen={isOpen} size='full'>
          <DrawerContent>
            <DrawerBody 
              bg="background"
              transition="background 0.2s"
            >
              <Stack h='100%' justifyContent='center' alignItems='center'>
                <Stack spacing={0} divider={<Divider borderColor='gray.100' opacity={1} w={80} />}>
                  {NAV_LINKS.map(({ href, text }) => (
                    <NextLink key={href} href={href} passHref>
                      <Link
                        href={href}
                        _hover={{ textDecoration: 'none', color: 'gray.800' }}
                        color='gray.500'
                        onClick={onClose}
                      >
                        <Text 
                          textAlign='center' 
                          fontSize='lg' 
                          py={6}
                          transition="color 0.2s"
                          _hover={{ color: 'primary' }}
                        >
                          {text}
                        </Text>
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
