import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "@fontsource/raleway";

import "./main.scss";

const App = ({ Component, pageProps }) => (
  <div className="main">
    <Head>
      <title>Kasvun mahdollistajat</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <script async src="https://www.google.com/recaptcha/api.js" />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
