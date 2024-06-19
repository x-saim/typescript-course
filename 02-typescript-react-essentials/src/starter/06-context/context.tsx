import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme mus tbe used within the ThemeProvider');
  }
  return context;
};
