import React from 'react';

const OfficeSpace = () => {
  // Single office object
  const office = {
    name: 'Prestige Tech Park',
    rent: 55000,
    address: 'Whitefield, Bangalore',
    image: 'https://via.placeholder.com/250' // Replace with actual image URL if needed
  };

  // List of offices
  const offices = [
    { name: 'Cyber City', rent: 45000, address: 'Gurgaon' },
    { name: 'RMZ Infinity', rent: 60000, address: 'Bangalore' },
    { name: 'DLF Tech Park', rent: 75000, address: 'Chennai' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏢 Office Space Rental</h1>

      {/* Office image */}
      <img src={office.image} alt="Office" width="250" height="150" />

      {/* Single office details */}
      <h3>{office.name}</h3>
      <p>Rent: ₹ <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>{office.rent}</span></p>
      <p>Address: {office.address}</p>

      <hr />

      {/* List of office spaces */}
      <h2>Available Office Spaces:</h2>
      {offices.map((o, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h4>{o.name}</h4>
          <p>
            Rent: ₹ <span style={{ color: o.rent < 60000 ? 'red' : 'green' }}>{o.rent}</span>
          </p>
          <p>Address: {o.address}</p>
        </div>
      ))}
    </div>
  );
};

export default OfficeSpace;
