import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    black: string;
    background: string;
    gray: string;
    imageBorder: string;
    skeleton: string;
    navbar: {
      background: string;
      unselected: string;
      selected: string;
      loginButton: string;
    };
    primary: {
      black: string;
      gray: string;
      statusRed: string;
      blue: string;
      white: string;
      green: string;
      red: string;
      shoftRed: string;
      darkBlue: string;
    };
    disable: {
      black: string;
      blue: string;
    };
  }
}
