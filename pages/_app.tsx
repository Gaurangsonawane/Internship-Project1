import type { AppProps } from 'next/app';
import '@/src/globals.css'; // Import Tailwind CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
