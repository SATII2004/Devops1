import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [customerCount, setCustomerCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const customerRes = await axios.get(`${config.url}/admin/customercount`);
        const managerRes = await axios.get(`${config.url}/admin/managercount`);
        const eventRes = await axios.get(`${config.url}/admin/eventcount`);

        setCustomerCount(customerRes.data);
        setManagerCount(managerRes.data);
        setEventCount(eventRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Customers</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#007bff' }}>{customerCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Managers</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>{managerCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Events</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff5722' }}>{eventCount}</p>
        </div>
      </div>
    </div>
  );
}
