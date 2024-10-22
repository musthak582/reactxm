import React, { useState } from 'react';

const SearchFilter = () => {
  // Sample list of items to search through
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango', 'Orange', 'Peach','Banana'];

  // State for search query and filtered results
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the items based on the search query (case insensitive)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Search Filter</h2>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        style={styles.input}
      />

      {/* Display the filtered list */}
      <ul style={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={styles.listItem}>{item}</li>
          ))
        ) : (
          <li style={styles.noResults}>No results found</li>
        )}
      </ul>
    </div>
  );
};

// Inline CSS styles for simplicity
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '80%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
  },
  noResults: {
    color: '#999',
  },
};

export default SearchFilter;

