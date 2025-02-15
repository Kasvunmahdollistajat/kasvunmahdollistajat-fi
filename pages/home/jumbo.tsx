import styles from "./jumbo.module.scss";

const Jumbo = () => (
  <div className={styles.jumbo}>
    <div className={styles.jumboWrapper}>
      <div>
        <h1>KASVUN MAHDOLLISTAJAT</h1>
        <h2>
          Autamme organisaatioita onnistumaan ja ihmisiä kasvamaan johtajuudessa
        </h2>
      </div>
    </div>
  </div>
);

export default Jumbo;
