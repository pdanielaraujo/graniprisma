/** @type {import('tailwindcss').Config} */

const colors = {
  white: 'white',
  black: 'black',
  blue: {
    200: '#BCCEE3',
    300: '#93AED0',
    400: '#6A8FBE',
    500: '#19395B',
    600: '#142E49',
    700: '#102437',
    800: '#0B1924',
    900: '#060D12',
  },
  gray: {
    100: '#ECEDEF',
    200: '#CFD2D8',
    300: '#B1B7C1',
    400: '#949CA9',
    500: '#7C848E',
    600: '#636970',
    700: '#4B4F53',
    800: '#333638',
    900: '#1A1C1D',
  },
  green: {
    200: '#C4DAC8',
    300: '#A1C3A7',
    400: '#8AB793',
    500: '#7CA484',
    600: '#65856A',
    700: '#4E6651',
    800: '#374837',
    900: '#20291E',
  },
  red: {
    200: '#F8B8BB',
    300: '#F48A8F',
    400: '#F05C63',
    500: '#F51720',
    600: '#C41219',
    700: '#931011',
    800: '#620D0A',
    900: '#310705',
  },
  yellow: {
    200: '#FFF4BF',
    300: '#FFEE99',
    400: '#FFEA4C',
    500: '#FFF600',
    600: '#CCC500',
    700: '#999400',
    800: '#666300',
    900: '#333200',
  },
};

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundColor: { ...colors },
    textColor: { ...colors },
    colors,
    extend: {},
  },
  plugins: [],
};
