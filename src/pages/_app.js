import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Car Sale Campaign</title>
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
    
  );
}
