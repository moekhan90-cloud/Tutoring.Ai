// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header.jsx';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Adaptive Tutoring.ai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
