import React from "react";
import { Link } from "react-router-dom";
import contacts from "../data/contacts";
import styles from "../styles/component-style/Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles.title}>Contacts</h2>
      </header>

      <ul className={styles.list}>
        {contacts.map((c) => (
          <li key={c.id} className={styles.card}>
            <Link to={`/contacts/${c.id}`} className={styles.link}>
              <div className={styles.meta}>
                <div className={styles.name}>{c.name}</div>
                <div className={styles.relation}>{c.relation}</div>
              </div>
              <div className={styles.chev}>View →</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
