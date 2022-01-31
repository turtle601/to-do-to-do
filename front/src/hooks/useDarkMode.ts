import { useRecoilState, useRecoilValue } from 'recoil';

import { DefaultTheme } from 'styled-components';
import { themeState, themeSelector } from '../atoms/atom.theme';

export const useDarkMode = (): [DefaultTheme, () => void] => {
  const [themeAtom, setThemeAtom] = useRecoilState(themeState);
  const theme = useRecoilValue(themeSelector);

  const toggleTheme = () => {
    return themeAtom === 'dark' ? setThemeAtom('light') : setThemeAtom('dark');
  };

  return [theme, toggleTheme];
};
