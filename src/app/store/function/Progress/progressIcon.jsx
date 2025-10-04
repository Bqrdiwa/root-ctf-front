import React from 'react'

function progressIcon({ val }) {
  const value = val 
  switch (true) {
    case value <= 25:
      return (
        <p className="progress" style={{ backgroundColor: 'red' }}>{value}%</p>
      );
    case value <= 50:
      return (
        <p className="progress" style={{ backgroundColor: 'orange' }}>{value}%</p>
      );
    case value <= 75:
      return (
        <p className="progress" style={{ backgroundColor: '#756b0a' }}>{value}%</p>
      );
    case value <= 100:
      return (
        <p className="progress" style={{ backgroundColor: 'green' }}>{value}%</p>
      );
    default:
      return '';
  }
}

export default progressIcon;
