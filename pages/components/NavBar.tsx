import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import classnames from "classnames";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navBar}>
      <img src="Logo.png" alt="logo" />
      <div
        className={classnames(styles.linkWrapper, {
          [styles.visible]: menuOpen,
          [styles.hidden]: !menuOpen,
        })}
      >
        <AnchorLink href="#palvelut">Palvelut</AnchorLink>
        <AnchorLink href="#tarina">Tarina</AnchorLink>
        <AnchorLink href="#asiantuntijat">Asiantuntijat</AnchorLink>
      </div>
      <div className={styles.mobileMenu}>
        <img
          src="menu.webp"
          alt={"Valikko"}
          className={classnames({
            [styles.visible]: !menuOpen,
            [styles.hidden]: menuOpen,
          })}
          onClick={() => {
            setMenuOpen(true);
          }}
        />
        <img
          src="close.webp"
          alt={"X"}
          className={classnames({
            [styles.visible]: menuOpen,
            [styles.hidden]: !menuOpen,
          })}
          onClick={() => {
            setMenuOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
