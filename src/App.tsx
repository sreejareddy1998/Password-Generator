import * as React from 'react';
import { useState } from 'react';
import usePasswordGenerator from './hooks/usepassword-generator';
import './style.css';

export default function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: 'Include Uppercase Letters', state: false },
    { title: 'Include Lowercase Letters', state: false },
    { title: 'Include Numbers', state: false },
    { title: 'Include Symbols', state: false },
  ]);

  const handleCheckboxData = (index) => {
    const updatedCheckboxData = [...checkboxData];
    checkboxData[index].state = !checkboxData[index].state;
    setCheckboxData(updatedCheckboxData);
    console.log(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={handleCopy}>
            Copy
          </button>
        </div>
      )}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          onChange={(e) => {
            setLength(e.target.value);
          }}
          value={length}
          step="1"
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={() => handleCheckboxData(index)}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
        {/* <input type='checkbox' value={checkboxData.title}/> */}
      </div>
      <div>Strength</div>
      <div>
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <button
          type="button"
          className="generateBtn"
          onClick={() => {
            generatePassword(checkboxData, length);
          }}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}
