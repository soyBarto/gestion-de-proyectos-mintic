import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Estoy en el app');
  return <Component {...pageProps} />;
}

export default MyApp;
