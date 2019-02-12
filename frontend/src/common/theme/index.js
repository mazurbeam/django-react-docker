import { createGlobalStyle } from 'styled-components';
import { theme } from '@smooth-ui/core-sc';
import { default as reakitTheme } from 'reakit-theme-default';

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

const colors = {
  blue: '#07c',
  bg: '#f6f5f6',
  bgLight: '#FBFBFB',
  border: '#EBEBEB',
  primary: '#D1d1d1'
};

export default {
  ...theme,
  ...reakitTheme,
  palette: {
    ...reakitTheme.palette,
    /* https://coolors.co/26547c-a3d5ff-476c9b-8b95c9-637081*/
    primary: ['#26547C', '#A3D5FF', '#476C9B', '#8B95C9', '#637081'],
    secondary: ['#02394a', '#043e77', '#ff7fc1', '#21cad3', '#b363f9'],
    whites: ['#ffffff', '#e8e8e8', '#d1d1d1', '#bababa', '#bababa']
  },
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors,
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
