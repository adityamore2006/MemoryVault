import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/component-style/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>MemoryVault</div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipients" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Recipients
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Timeline
          </NavLink>
        </li>
        <li>
          <NavLink to="/occasions" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Occasions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}