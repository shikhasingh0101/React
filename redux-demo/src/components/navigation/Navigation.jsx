import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                ITM
            </div>
            <div className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
