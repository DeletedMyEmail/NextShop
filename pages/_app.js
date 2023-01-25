import '@/styles/globals.css'
import ErrorPage from 'next/error'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
