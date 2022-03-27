import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "@fontsource/raleway";

import "./main.scss";

const App = ({ Component, pageProps }) => (
  <div style={{ fontFamily: "Raleway" }}>
    <Head>
      <title>Kasvun mahdollistajat</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
