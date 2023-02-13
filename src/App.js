import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const list = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Smith' },
    { id: 4, name: 'Joan Smith' }
  ];

  const handleSearch = e => {
    setSearchValue(e.target.value);
    const filtered = list.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredList(filtered);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleSearch} />
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;
