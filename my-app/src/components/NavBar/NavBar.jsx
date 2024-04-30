import React from "react";

import styles from "./NavBar.module.css";
import { Button } from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <Search className={styles.searchWrapper} placeholder="Search a song of your choice" />
      <Button children="GIVE FEEDBACK" />
    </nav>
  );
};

export default NavBar;
