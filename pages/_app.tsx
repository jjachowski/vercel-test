import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang='pl'>
      <Component lang='pl' {...pageProps} />;
    </html>
  );
}

export default MyApp;
