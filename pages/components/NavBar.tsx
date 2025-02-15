import { useState, JSX } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.scss";

const ScrollLink = ({
  target,
  children,
}: {
  target: string;
  children: string | JSX.Element;
}) => (
  <Link to={target} smooth={true} offset={0} duration={500}>
    {children}
  </Link>
);

const classnames = (baseClass: string, menuOpen: boolean): string =>
  `${baseClass ? `${baseClass} ` : ""}${
    menuOpen ? styles.visible : styles.hidden
  }`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navBar}>
      <img src="Logo.png" alt="logo" />
      <div className={classnames(styles.linkWrapper, menuOpen)}>
        <ScrollLink target={"palvelut"}>Palvelut</ScrollLink>
        <ScrollLink target={"tarina"}>Tarina</ScrollLink>
        <ScrollLink target={"asiantuntijat"}>Asiantuntijat</ScrollLink>
      </div>
      <div className={styles.mobileMenu}>
        <img
          src="menu.webp"
          alt={"Valikko"}
          className={classnames("", !menuOpen)}
          onClick={() => {
            setMenuOpen(true);
          }}
        />
        <img
          src="close.webp"
          alt={"X"}
          className={classnames("", menuOpen)}
          onClick={() => {
            setMenuOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
