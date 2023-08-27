import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <a href="#product" className={styles.navLink}>
          Product
        </a>
        <a href="#about" className={styles.navLink}>
          About Us
        </a>
    
      </nav>
     
    </header>
  );
};

export default Header;
