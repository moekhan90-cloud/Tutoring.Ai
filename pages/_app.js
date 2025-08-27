// Works with the jsconfig alias:
import '@/styles/globals.css'

// Minimal Next.js App wrapper
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
