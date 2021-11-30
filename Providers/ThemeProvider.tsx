import { IPalette, ThemeProvider } from '@fluentui/react';
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { darkTheme, ligthTheme } from 'src/theme/theme';

export type ThemeType = 'light' | 'dark';
export type ThemeState = {
  theme: ThemeType;
};

export type ThemeAction =
  | { type: 'setTheme'; payload: ThemeType }
  | { type: 'setLight' }
  | { type: 'setDark' };

export type ThemeContextType = {
  theme: ThemeType;
  palette: IPalette;
  setTheme: (theme: ThemeType) => void;
  setLightTheme: () => void;
  setDarkTheme: () => void;
};

export const IBThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  palette: {} as IPalette,
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
};
export const IBThemeProvider: FC<IBThemeContextType> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  const theme = useMemo(() => {
    return state.theme === 'light' ? ligthTheme : darkTheme;
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
        palette: theme.palette,
        theme: state.theme,
        setDarkTheme,
        setLightTheme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </IBThemeContext.Provider>
  );
};
export const useIBThemeContext = () => useContext(IBThemeContext);
