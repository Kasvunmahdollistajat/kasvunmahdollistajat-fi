import Contact from "./home/contact";
import CustomerStories from "./home/customerStories";
import Experts from "./home/experts";
import Intro from "./home/intro";
import Jumbo from "./home/jumbo";
import Services from "./home/services";
import Story from "./home/story";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <>
      <Jumbo />
      <div className={styles.content}>
        <Intro />
        <Services />
        <Story />
        <Experts />
        <Contact />
        <CustomerStories />
      </div>
    </>
  );
};

export default Home;
