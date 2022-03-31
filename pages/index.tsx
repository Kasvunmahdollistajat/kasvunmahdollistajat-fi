import Intro from "./home/intro";
import Jumbo from "./home/jumbo";
import Services from "./home/services";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <>
      <Jumbo />
      <div className={styles.content}>
        <Intro />
        <Services />
        <h3>Miten voin olla sinulle avuksi? - Ota yhteyttä!</h3>
        <span>
          Päivi Vuorimaa - <strong>paivi.vuorimaa@gmail.com</strong>
        </span>
      </div>
    </>
  );
};

export default Home;
