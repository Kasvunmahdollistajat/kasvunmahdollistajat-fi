import styles from "./index.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.jumbo}>
        <div className={styles.jumboWrapper}>
          <div>
            <h1>KASVUN MAHDOLLISTAJAT</h1>
            <h2>
              Autamme organisaatioita onnistumaan ja ihmisiä kasvamaan
              johtajuudessa
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3>Miten voin olla sinulle avuksi? - Ota yhteyttä!</h3>
        <span>
          Päivi Vuorimaa - <strong>paivi.vuorimaa@gmail.com</strong>
        </span>
      </div>
    </>
  );
};

export default Home;
