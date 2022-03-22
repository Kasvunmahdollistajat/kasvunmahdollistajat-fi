import Image from "next/image";

import logo from "../../public/Logo.png";
import styles from "../../styles/NavBar.module.scss";

const NavBar = () => (
  <div className={styles.navBar}>
    <Image src={logo} alt="logo" />
  </div>
);

export default NavBar;
