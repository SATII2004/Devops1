//import React from 'react';
import './style.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="admin-section">
        <h3>Admin</h3>
        <ul>
          <li>Admin Login</li>
          <li>Add Event Manager</li>
          <li>View/Delete Event Managers</li>
          <li>View Customers</li>
          <li>Delete/Block Customer</li>
          <li>View All Events</li>
        </ul>
      </div>
      <div className="manager-section">
        <h3>Event Manager</h3>
        <ul>
          <li>Event Manager Login</li>
          <li>View/Update Profile</li>
          <li>Add New Event</li>
          <li>View Events</li>
          <li>View Bookings</li>
        </ul>
      </div>
      <div className="customer-section">
        <h3>Customer</h3>
        <ul>
          <li>Registration</li>
          <li>Customer Login</li>
          <li>View/Update Profile</li>
          <li>Book an Event</li>
          <li>View Booked Events</li>
        </ul>
      </div>
    </div>
  );
}
