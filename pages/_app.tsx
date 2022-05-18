import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "pannellum-react/es/pannellum/css/video-js.css";
import "pannellum-react/es/pannellum/css/pannellum.css";
import "pannellum-react/es/pannellum/css/style-textInfo.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
