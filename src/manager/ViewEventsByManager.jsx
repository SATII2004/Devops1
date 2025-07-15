import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewEventsByManager() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [managerId, setManagerId] = useState(null);

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      const manager = JSON.parse(storedManager);
      setManagerId(manager.id);
      fetchEvents(manager.id);
    }
  }, []);

  const fetchEvents = async (managerId) => {
    try {
      const response = await axios.get(`${config.url}/manager/vieweventsbymanager/${managerId}`);
      setEvents(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch your events');
      setEvents([]);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Events</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {events.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No events added yet.</p>
      ) : (
        <table style={{ margin: '0 auto', width: '90%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Cost</th>
              <th>Manager Name</th>
              <th>Manager Email</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
               <tr key={event.id}>
               <td>{event.id}</td>
               <td>{event.category}</td>
               <td>{event.title}</td>
               <td>{event.description}</td>
               <td>{event.capacity}</td>
               <td>{event.cost}</td>
               <td>{event.manager?.name}</td>
               <td>{event.manager?.email}</td>
             </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
