import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <svg id="mainwidget" width="950" x="0" y="0" height="200">
        <g>
          <g className="currentWeather">
            <rect x="0" y="0" width="158" height="200" className="leftRect"></rect>
            <rect x="0" y="0" width="158" height="30" className="currentDate"></rect>
            <text x="15" y="21" className="currentDateText">SUNDAY @ 9:37 AM</text>
            <rect x="0" y="30" width="158" height="55" className="currentTemp"></rect>
            <text className="currentTempText" x="60" y="65">50&#8457;</text>
            <rect x="0" y="60" width="158" height="55" className="currentWind"></rect>
            <text className="currentWindText" x="60" y="118">50&#8457;</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default App;
