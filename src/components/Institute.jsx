import React, { useState } from 'react';

const Institute = () => {
  const [institutes, setInstitutes] = useState([
    { name: 'Health Institute A', type: 'Hospital', location: 'New York', associatedPatents: 5 },
    { name: 'Health Institute B', type: 'Clinic', location: 'Los Angeles', associatedPatents: 3 },
  ]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const addNewInstitute = () => {
    const name = prompt('Enter the name of the institute:');
    if (!name) return;

    const type = prompt('Enter the type of the institute (e.g., Hospital, Clinic):');
    if (!type) return;

    const location = prompt('Enter the location of the institute:');
    if (!location) return;

    const associatedPatents = prompt('Enter the number of associated patents:');
    if (!associatedPatents || isNaN(associatedPatents)) return;

    const newInstitute = {
      name,
      type,
      location,
      associatedPatents: parseInt(associatedPatents, 10),
    };

    setInstitutes([...institutes, newInstitute]);
  };

  const editInstitute = (index) => {
    const institute = institutes[index];

    const name = prompt('Edit the name of the institute:', institute.name);
    if (!name) return;

    const type = prompt('Edit the type of the institute (e.g., Hospital, Clinic):', institute.type);
    if (!type) return;

    const location = prompt('Edit the location of the institute:', institute.location);
    if (!location) return;

    const associatedPatents = prompt(
      'Edit the number of associated patents:',
      institute.associatedPatents
    );
    if (!associatedPatents || isNaN(associatedPatents)) return;

    const updatedInstitute = {
      name,
      type,
      location,
      associatedPatents: parseInt(associatedPatents, 10),
    };

    const updatedInstitutes = [...institutes];
    updatedInstitutes[index] = updatedInstitute;
    setInstitutes(updatedInstitutes);
  };

  // Filter institutes based on the search query
  const filteredInstitutes = institutes.filter((institute) =>
    institute.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    institute.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    institute.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>
        <center>Institutes</center>
      </h1>
      <h4>List of Institutes</h4>
      <button onClick={addNewInstitute}>New Institute</button>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by Name, Type, or Location"
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
            <th>Institute Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Associated Patents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInstitutes.map((institute, index) => (
            <tr key={index}>
              <td>{institute.name}</td>
              <td>{institute.type}</td>
              <td>{institute.location}</td>
              <td>{institute.associatedPatents}</td>
              <td>
                <button onClick={() => alert(`Viewing details for ${institute.name}`)}>View</button>
                <button onClick={() => editInstitute(index)}>Edit</button>
                <button
                  onClick={() => {
                    const updatedInstitutes = institutes.filter((_, i) => i !== index);
                    setInstitutes(updatedInstitutes);
                  }}
                >
                  Delete
                </button>
              </td>
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

export default Institute;
