import Footer from "@/components/Footer";
import ScrollToTop from "react-scroll-to-top";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div>
        <ScrollToTop width="40" color="white" style={{backgroundColor:"#334155"}} className=" bg-black" smooth />
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
