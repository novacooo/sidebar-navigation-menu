export interface IThemeType {
  BACKGROUND: string;
  BACKGROUND_NAVIGATION: string;
  BACKGROUND_EXIT: string;
  BACKGROUND_MINIMISE: string;
  BACKGROUND_MAXIMISE: string;

  BORDER_NAVIGATION: string;
}

export const theme: IThemeType = {
  BACKGROUND: 'hsl(0,0%,100%)',
  BACKGROUND_NAVIGATION: 'hsla(214, 24%, 11%, 0.75)',
  BACKGROUND_EXIT: 'hsl(1, 100%, 68%)',
  BACKGROUND_MINIMISE: 'hsl(39, 100%, 63%)',
  BACKGROUND_MAXIMISE: 'hsl(143, 100%, 40%)',

  BORDER_NAVIGATION: 'hsla(224, 25%, 18%, 0.75)',
};
