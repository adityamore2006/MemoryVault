import React from "react";
export default function Dashboard() {
  return (
    <div className="page dashboard">

      <section className="dashboard-section upcoming-occasions">
        <h2>Upcoming Occasions</h2>
        <p>No upcoming occasions yet — click an occasion to view or add a new one.</p>
      </section>

      <section className="dashboard-section recent-gifts">
        <h2>Recent Gifts</h2>
        <p>Recent gifts will show here.</p>
        {/* Replace with a Table or list component */}
      </section>

      <section className="dashboard-section quick-add">
        <h2>Quick Add Gift</h2>
        <form className="quick-add-form" onSubmit={(e) => e.preventDefault()}>
          <input name="recipient" placeholder="Recipient name" />
          <input name="gift" placeholder="Gift" />
          <button type="submit">Add</button>
        </form>
      </section>

      <section className="dashboard-section contacts">
        <h2>Contacts</h2>
        <p>Contact list and edit links go here.</p>
        {/* Link to /recipients or an inline editor */}
      </section>
    </div>
  );
}
