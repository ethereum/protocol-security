import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { breakpoints, colors, fonts } from './foundations';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const overrides = {
  config,
  breakpoints,
  colors,
  fonts,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.900',
      },
    }),
  },
};

export default extendTheme(overrides);
