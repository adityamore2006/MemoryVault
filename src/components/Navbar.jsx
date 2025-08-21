import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/component-style/Navbar.module.css";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      recipient: form.recipient.value.trim(),
      gift: form.gift.value.trim(),
      note: form.note.value.trim(),
    };
    // Minimal handling — replace with real handler as needed
    console.log("Add Gift:", data);
    closeModal();
  };

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          MemoryVault
        </NavLink>

        <ul className={styles.links}>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
              Contacts
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

        <div>
          <button type="button" className={styles.addButton} onClick={openModal}>
            Add Gift
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label="Add Gift">
          <div className={styles.modal}>
            <header className={styles.modalHeader}>
              <h3>Add Gift</h3>
              <button aria-label="Close" className={styles.modalClose} onClick={closeModal}>×</button>
            </header>
            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <label>
                Recipient
                <input name="recipient" required />
              </label>
              <label>
                Gift
                <input name="gift" required />
              </label>
              <label>
                Note
                <input name="note" />
              </label>
              <div className={styles.modalActions}>
                <button type="button" onClick={closeModal}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}