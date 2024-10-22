import React, { useState } from 'react';
import './Accordion.css'; // Import the CSS styles


// Sample data to pass as props
const accordionData = [
  { title: 'Section 1', content: 'This is the content of section 1.' },
  { title: 'Section 2', content: 'This is the content of section 2.' },
  { title: 'Section 3', content: 'This is the content of section 3.' },
];

const Accordion = () => {
  // State to track which section is currently active
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active state of an accordion item
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          {/* Accordion Header */}
          <div className="accordion-header" onClick={() => handleToggle(index)}>
            <h3>{item.title}</h3>
            {/* Display the toggle icon */}
            <span className="accordion-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>

          {/* Accordion Content */}
          <div
            className={`accordion-content ${activeIndex === index ? 'active' : ''
              }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
