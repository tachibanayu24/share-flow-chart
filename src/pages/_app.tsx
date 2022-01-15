import "tailwindcss/tailwind.css";
import "@/styles/global.css";
import "@/styles/flow.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
