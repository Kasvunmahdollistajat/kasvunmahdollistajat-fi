import styles from "./intro.module.scss";

const Intro = () => (
  <div className={styles.intro}>
    <div className={styles.column}>
      <span>
        <b>Kasvun mahdollistajat Oy</b>
      </span>
      <span>Mikko Tyrkkö</span>
      <span>B-to-B myynti ja myynnin konsultointi</span>
      <span>
        Ota yhteyttä:{" "}
        <a href="mailto:miktyrkko@gmail.com">miktyrkko@gmail.com</a>
      </span>
    </div>
    <div className={styles.column}>
      <img src="mikko.jpg" alt="Mikko" />
    </div>
  </div>
);

export default Intro;
