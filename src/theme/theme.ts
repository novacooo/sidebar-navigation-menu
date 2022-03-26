export interface IThemeType {
  BACKGROUND: string;
  BACKGROUND_NAVIGATION: string;
  BACKGROUND_EXIT: string;
  BACKGROUND_EXIT_HOVER: string;
  BACKGROUND_MINIMISE: string;
  BACKGROUND_MINIMISE_HOVER: string;
  BACKGROUND_MAXIMISE: string;
  BACKGROUND_MAXIMISE_HOVER: string;

  BORDER: string;
  BORDER_NAVIGATION: string;

  TEXT_PRIMARY: string;
  TEXT_SECONDARY: string;
}

export const theme: IThemeType = {
  BACKGROUND: 'hsl(0,0%,100%)',
  BACKGROUND_NAVIGATION: 'hsla(214, 24%, 11%, 0.75)',
  BACKGROUND_EXIT: 'hsl(1, 100%, 68%)',
  BACKGROUND_EXIT_HOVER: 'hsl(1, 56%, 52%)',
  BACKGROUND_MINIMISE: 'hsl(39, 100%, 63%)',
  BACKGROUND_MINIMISE_HOVER: 'hsl(39, 80%, 52%)',
  BACKGROUND_MAXIMISE: 'hsl(143, 100%, 40%)',
  BACKGROUND_MAXIMISE_HOVER: 'hsl(143, 84%, 37%)',

  BORDER: 'hsla(218,25%,24%,0.75)',
  BORDER_NAVIGATION: 'hsla(224, 25%, 18%, 0.75)',

  TEXT_PRIMARY: 'hsl(0,0%,100%)',
  TEXT_SECONDARY: 'hsl(0,0%,64%)',
};
