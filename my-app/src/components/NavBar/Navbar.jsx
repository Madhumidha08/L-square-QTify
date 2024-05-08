import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import { Link } from "react-router-dom";

function Navbar() {
    const placeholder = "Search an album of your choice"; // Corrected placeholder text
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <Logo />
            </Link>
            <SearchBox placeholder={placeholder} />
            <FeedbackButton />
        </nav>
    );
}

export default Navbar;
