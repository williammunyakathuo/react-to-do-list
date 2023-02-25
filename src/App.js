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

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
    setNewTodo('');
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='everything'>
      <form onSubmit={handleSubmit}>
        <div className="just">
          <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
          <button type="submit">Add Todo</button>
          </div>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default App;
