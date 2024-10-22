// ToDoList.js
import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task, i) =>
        i === editingIndex ? { ...task, text: editingText } : task
      )
    );
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {editingIndex === index ? (
              <div className="edit-mode">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </div>
            ) : (
              <>
                <span onClick={() => toggleComplete(index)}>{task.text}</span>
                <div className="actions">
                  <button onClick={() => startEditing(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
