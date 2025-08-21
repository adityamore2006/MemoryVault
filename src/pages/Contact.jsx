import React from "react";
import { useParams, Link } from "react-router-dom";
import contacts from "../data/contacts";
import styles from "../styles/component-style/Contact.module.css";

export default function Contact() {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return (
      <div className={styles.page}>
        <h2>Contact not found</h2>
        <p>The requested contact does not exist.</p>
        <p>
          <Link to="/contacts">Back to contacts</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles.title}>{contact.name}</h2>
        <Link to="/contacts" className={styles.backLink}>Back</Link>
      </header>

      <section className={styles.card}>
        <div className={styles.row}><span className={styles.label}>Relation:</span> <span>{contact.relation}</span></div>
        <div className={styles.row}><span className={styles.label}>Email:</span> <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
        <div className={styles.row}><span className={styles.label}>Phone:</span> <span>{contact.phone}</span></div>
        <div className={styles.row}><span className={styles.label}>Notes:</span> <span>{contact.notes}</span></div>
      </section>
    </div>
  );
}
