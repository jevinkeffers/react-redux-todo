import React from 'react';
import AddToDo from './components/AddToDo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Whoa Another To-Do List</h1>
      <h2>With React and Redux</h2>
      <AddToDo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
