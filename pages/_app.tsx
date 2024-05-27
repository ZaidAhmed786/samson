 
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Provider } from "react-redux";
import store from "../redux/store";

import { useEffect } from "react";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
