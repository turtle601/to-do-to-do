import { atom, selector } from 'recoil';
import { lightTheme, darkTheme } from '../styles/theme';

export const themeState = atom({
  key: 'theme',
  default: 'dark',
});

export const themeSelector = selector({
  key: 'themeSelector',
  get: ({ get }) => {
    const theme = get(themeState);

    return theme === 'dark' ? darkTheme : lightTheme;
  },
});
