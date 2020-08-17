import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

// Get Default breakpoints to define typograhy responsive behaviour
const breakpoints = createBreakpoints({});

const color = {
  primary: '#4287f5',
  secondary: '#f8e6de',
  tertiary: '#fed760',
  quaternary: '#b8f0c0',
  quinary: '#FF5C85',
  grey: {
    light: '#333',
    lighter: 'rgba(0,0,0,.4)',
    dark: '#666',
    darker: '#999',
  },
  white: '#fff',
  black: '#000',
};

const typography = {
  fontFamily: 'Proxima Nova Alt',
  body2: {
    fontFamily: 'Proxima Nova Alt',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.6,
    color: color.grey.light,
    letterSpacing: 0,
  },
};

const palette = {
  background: {
    default: color.white,
  },
  primary: {
    main: color.primary,
    dark: color.white,
  },
  secondary: {
    main: color.secondary,
  },
  tertiary: {
    main: color.tertiary,
  },
  quaternary: {
    main: color.quaternary,
  },
  quinary: {
    main: color.quinary,
  },
  grey: {
    20: color.grey.lighter,
    50: color.grey.light,
    100: color.grey.dark,
    200: color.grey.darker,
  },
};

const overrides = {
  MuiCssBaseline: {},
  MuiTypography: {
    root: {
      margin: '0 0 .5rem',
    },
    h1: {
      fontFamily: 'Proxima Nova Alt',
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.1,
      letterSpacing: 0,
      color: color.black,
      [breakpoints.up('md')]: {
        fontSize: '2.875rem',
      },
    },
    h2: {
      fontFamily: 'Proxima Nova Alt',
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: 1.1,
      letterSpacing: 0,
      [breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },
    },
  },
};

export default createMuiTheme({
  typography,
  palette,
  overrides,
});
