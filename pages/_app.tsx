// pages/_app.tsx
import { useEffect } from 'react';
import { ThemeProvider } from '../store/themeContext';

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
