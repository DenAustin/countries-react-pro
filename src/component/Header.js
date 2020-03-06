import React from "react";

const Header = () => {
  return (
    <div className="gllobe">
      <h1 className="header">World Countries Data</h1>
      <h3 className="current-total">World cities weather condition</h3>
      <h3 className="result-flash"></h3>
      <input type="text" className="input-field" />
      <div className="buttons">
        <button className="name">NAME</button>
        <button className="capital">CAPITAL</button>
        <button className="population">POPULATION</button>
        <button id="chart">
          <i className="fas fa-chart-bar"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
