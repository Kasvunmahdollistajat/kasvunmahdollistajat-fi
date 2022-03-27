import styles from "./index.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.jumbo}>
        <img src="/Kivet.jpg" alt="" />
        <div className={styles.jumboWrapper}>
          <h1>KASVUN MAHDOLLISTAJAT</h1>
          <h2 style={{ fontSize: "2rem" }}>
            Autamme organisaatioita onnistumaan ja ihmisiä kasvamaan
            johtajuudessa
          </h2>
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
