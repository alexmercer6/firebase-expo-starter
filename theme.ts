import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';

// Define the light theme
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#219ebc', // Medium Blue
    // primaryVariant: '#8ecae6', // Light Blue
    // secondary: '#fb8500', // Dark Orange
    // accent: '#fb8500', // Dark Orange
    // accentVariant: '#ffb703', // Light Orange
    // background: '#ffffff',
    // surface: '#ffffff',
    // surfaceVariant: '#f0f0f0',
    // text: '#000000',
    // notification: '#fb8500',
  },
};

// Define the dark theme
export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // primary: '#219ebc', // Medium Blue
    // primaryVariant: '#8ecae6', // Light Blue
    // secondary: '#fb8500', // Dark Orange
    // accent: '#fb8500', // Dark Orange
    // accentVariant: '#ffb703', // Light Orange
    // background: '#023047',
    // surface: '#023047',
    // surfaceVariant: '#034078',
    // text: '#ffffff',
    // notification: '#fb8500',
  },
};
