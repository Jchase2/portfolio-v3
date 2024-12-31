import { ThemeProvider as BaseThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
