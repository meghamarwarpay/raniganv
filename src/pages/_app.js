

import { CartProvider } from "@/context/CartContext";

import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App({ Component, pageProps }) {
  return (
   <>

<CartProvider>

          <Component {...pageProps} />

      </CartProvider>
      </>
  );
}
