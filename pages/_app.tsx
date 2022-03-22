import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { prefix } from "../utils/prefix";

import "../styles/main.scss";

const App = ({ Component, pageProps }) => (
  <div className="main">
    <Head>
      <title>Kasvun mahdollistajat</title>
      <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
