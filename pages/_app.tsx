import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component lang='pl' {...pageProps} />;
}

export default MyApp;
