import Head from "next/head";
import { prefix } from "../utils/prefix";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Kasvun mahdollistajat</title>
      <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
