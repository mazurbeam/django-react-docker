import { createGlobalStyle } from 'styled-components';
import { theme } from '@smooth-ui/core-sc';

export const GlobalStyle = createGlobalStyle`
@font-face: 
{
  font-family: 'Open Sans', sans-serif;
  src: url('https://fonts.googleapis.com/css?family=Open+Sans');
}
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  padding: 0;
  margin: 0;
  
}
`;

export default {
  ...theme,

  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    bg: '#f6f5f6',
    bgLight: '#FBFBFB',
    border: '#EBEBEB'
  },
  fonts: {
    sans: 'Open Sans, sans-serif',
    mono: 'Menlo, monospace'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  cards: {
    basic: {
      border: '1px solid  #EBEBEB'
    }
  }
};
