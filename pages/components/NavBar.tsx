import { useState, JSX } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.scss";

const ScrollLink = ({
  target,
  children,
  close,
}: {
  target: string;
  children: string | JSX.Element;
  close: () => void;
}) => (
  <Link
    to={target}
    smooth={true}
    offset={0}
    duration={500}
    onClick={() => close()}
  >
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
      <div
        className={`${classnames(styles.linkWrapper, menuOpen)} ${
          styles.animate
        }`}
      >
        <ScrollLink target={"palvelut"} close={() => setMenuOpen(false)}>
          Palvelut
        </ScrollLink>
        <ScrollLink target={"tarina"} close={() => setMenuOpen(false)}>
          Tarina
        </ScrollLink>
        <ScrollLink target={"asiantuntijat"} close={() => setMenuOpen(false)}>
          Asiantuntijat
        </ScrollLink>
        <ScrollLink target={"yhteys"} close={() => setMenuOpen(false)}>
          Ota&nbsp;yhteyttä
        </ScrollLink>
        <ScrollLink
          target={"asiakaskokemuksia"}
          close={() => setMenuOpen(false)}
        >
          Asiakaskokemuksia
        </ScrollLink>
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
