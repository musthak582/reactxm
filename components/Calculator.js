import React, { useState } from 'react';
import './Calculator.css'
const Calculator = () => {
  const [input, setInput] = useState('');

  // Handle button click events
  const handleButtonClick = (value) => {
    if (value === 'AC') {
      // Clear the input
      setInput('');
    } else if (value === 'DE') {
      // Delete the last character
      setInput(input.slice(0, -1));
    } else {
      // Append the value to the input
      setInput(input + value);
    }
  };

  // Evaluate the mathematical expression
  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {/* Row 1 */}
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick(' / ')}>÷</button>

        {/* Row 2 */}
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick(' * ')}>×</button>

        {/* Row 3 */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick(' - ')}>-</button>

        {/* Row 4 */}
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('00')}>00</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick(' + ')}>+</button>

        {/* Row 5 */}
        <button className="span-two" onClick={() => handleButtonClick('AC')}>
          AC
        </button>
        <button className="span-two" onClick={() => handleButtonClick('DE')}>
          DE
        </button>
      </div>
    </div>
  );
};

export default Calculator;
