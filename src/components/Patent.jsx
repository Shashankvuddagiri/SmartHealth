import React, { useState } from 'react';

const Patent = () => {
  const [patents, setPatents] = useState([
    { medicineName: 'Paracetamol', batchNumber: 'B123', expiryDate: '2025-12-31', owner: 'John Doe', status: 'Active' },
    { medicineName: 'Ibuprofen', batchNumber: 'B124', expiryDate: '2025-11-30', owner: 'Jane Smith', status: 'Active' },
  ]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const addNewPatent = () => {
    const medicineName = prompt('Enter the name of the new medicine:');
    if (!medicineName) return;

    const batchNumber = prompt('Enter the batch number:');
    if (!batchNumber) return;

    const expiryDate = prompt('Enter the expiry date (YYYY-MM-DD):');
    if (!expiryDate) return;

    const owner = prompt('Enter the owner name:');
    if (!owner) return;

    const newPatent = {
      medicineName,
      batchNumber,
      expiryDate,
      owner,
      status: calculateStatus(expiryDate),
    };

    setPatents([...patents, newPatent]);
  };

  const calculateStatus = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);

    const diffInTime = expiry.getTime() - today.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    if (diffInDays > 60) {
      return 'Active';
    } else if (diffInDays > 0 && diffInDays <= 60) {
      return 'Expires in 2 months';
    } else {
      return 'Expired';
    }
  };

  // Filter patents based on the search query
  const filteredPatents = patents.filter((patent) =>
    patent.medicineName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patent.batchNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patent.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1><center>Patents</center></h1>
      <h4>List of patents</h4>
      <button onClick={addNewPatent}>New Patent</button>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by Medicine Name, Batch Number, or Owner"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          padding: '8px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />

      <table border="1" style={{ marginTop: '10px', width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Batch Number</th>
            <th>Expiry Date</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatents.map((patent, index) => (
            <tr key={index}>
              <td>{patent.medicineName}</td>
              <td>{patent.batchNumber}</td>
              <td>{patent.expiryDate}</td>
              <td>{patent.owner}</td>
              <td>{calculateStatus(patent.expiryDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="footer">
        <p>© 2025 Smart Health Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Patent;
