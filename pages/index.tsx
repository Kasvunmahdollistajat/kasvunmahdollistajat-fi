import Intro from "./home/intro";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.content}>
        <Intro />
      </div>
    </>
  );
};

export default Home;
