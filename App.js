// src/App.js

// import React from 'react';
// import SearchFilter from './components/SearchFilter';
// import Calculator from './components/Calculator';
// import Counter from './components/Counter';
// import Accordion from './components/Accordion';
// import ToDoList from './components/ToDoList';
// import Stopwatch from './components/Stopwatch';
// import Login from './components/Login';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Login />
//       <Stopwatch />
//       <ToDoList />
//       <Calculator />
//       <Accordion />
//       <SearchFilter />
//       <Counter />
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login /> : <Signup />}
      <div className="toggle-link">
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleForm}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;

