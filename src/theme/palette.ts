import { grey } from "@mui/material/colors";

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    customGrey: Palette['primary'];
    teal: Palette['primary'];
    purple: Palette['primary'];
    esmerald: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    customGrey?: PaletteOptions['primary'];
    teal?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
    esmerald?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    customGrey: true;
    teal: true;
    purple: true;
    esmerald: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    white: true;
    customGrey: true;
    teal: true;
    purple: true;
    esmerald: true;
  }
}

export const palette = {

  primary: {
    main: '#104d94',
    light: '#3f70a9',
    dark: '#0b3567',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#1d778c',
    light: '#4a92a3',
    dark: '#145362',
    contrastText: '#ffffff',
  },
  success: {
    main: '#16a34a',
    light: '#22c55e',
    dark: '#15803d',
    contrastText: '#ffffff',
  },
  error: {
    main: '#dc2626',
    light: '#ef4444',
    dark: '#b91c1c',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ea580c',
    light: '#f97316',
    dark: '#c2410c',
    contrastText: '#000000',
  },
  info: {
    main: '#0284c7',
    light: '#0ea5e9',
    dark: '#0369a1',
    contrastText: '#ffffff',
  },

  white: {
    main: '#fff',
    light: grey[100],
    dark: grey[200],
    contrastText: grey[900],
  },
  customGrey: {
    main: grey[300],
    light: grey[200],
    dark: grey[400],
    contrastText: grey[900],
  },
  teal: {
    main: '#0d9488',
    light: '#14b8a6',
    dark: '#0f766e',
    contrastText: '#fff',
  },
  purple: {
    main: '#9333ea',
    light: '#a855f7',
    dark: '#7e22ce',
    contrastText: '#fff',
  },
  esmerald: {
    main: '#059669',
    light: '#10b981',
    dark: '#047857',
    contrastText: '#fff',
  }
};