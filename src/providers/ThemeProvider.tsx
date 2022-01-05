import { ITheme, Theme, ThemeProvider } from '@fluentui/react';
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { darkTheme, ligthTheme } from '../theme/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeType = 'light' | 'dark';
export type ThemeState = {
  theme: ThemeType;
};

export type ThemeAction =
  | { type: 'setTheme'; payload: ThemeType }
  | { type: 'setLight' }
  | { type: 'setDark' };

export type ThemeContextType = {
  themeName: ThemeType;
  theme: ITheme;
  setTheme: (theme: ThemeType) => void;
  setLightTheme: () => void;
  setDarkTheme: () => void;
};

export const IBThemeContext = createContext<ThemeContextType>({
  themeName: 'light',
  theme: ligthTheme,
  setDarkTheme: () => null,
  setTheme: () => null,
  setLightTheme: () => null,
});

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'setDark':
      return { theme: 'dark' };
    case 'setLight':
      return { theme: 'light' };
    case 'setTheme':
      return { theme: action.payload };
    default:
      return state;
  }
};

type IBThemeContextType = {
  children: React.ReactNode;
  theme?: {
    light?: Partial<Theme>;
    dark?: Partial<Theme>;
  };
};
export const IBThemeProvider: FC<IBThemeContextType> = ({
  children,
  theme: customTheme,
}) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  const light = { ...ligthTheme, ...(customTheme || {}).light };
  const dark = { ...darkTheme, ...(customTheme || {}).dark };

  const theme = useMemo(() => {
    return state.theme === 'light' ? light : dark;
  }, [state.theme]);

  const setTheme = useCallback(
    (theme: ThemeType) => {
      dispatch({ type: 'setTheme', payload: theme });
    },
    [dispatch],
  );
  const setLightTheme = useCallback(() => {
    dispatch({ type: 'setLight' });
  }, [dispatch]);

  const setDarkTheme = useCallback(() => {
    dispatch({ type: 'setDark' });
  }, [dispatch]);

  return (
    <IBThemeContext.Provider
      value={{
        themeName: state.theme,
        theme,
        setDarkTheme,
        setLightTheme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </ThemeProvider>
    </IBThemeContext.Provider>
  );
};
export const useIBThemeContext = () => useContext(IBThemeContext);
