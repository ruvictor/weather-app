import React from 'react';
import './App.css';
import windImg from './assets/winds.png';
import marker from './assets/marker.png';

function App() {
  return (
    <div className="App">
      <svg id="mainwidget" width="950" x="0" y="0" height="200" xmlnsXlink="http://www.w3.org/2000/svg"
     xlinkHref="http://www.w3.org/1999/xlink">
        <g>
          <g className="currentWeather">
            <rect x="0" y="0" width="158" height="200" className="leftRect"></rect>
            <rect x="0" y="0" width="158" height="30" className="currentDate"></rect>
            <text x="15" y="21" className="currentDateText">SUNDAY @ 9:37 AM</text>
            <rect x="0" y="30" width="158" height="35" className="currentTemp"></rect>
            <text className="currentTempText" x="60" y="55">50&#8457;</text>
            <rect x="0" y="65" width="158" height="100" className="currentWind"></rect>
            <image xlinkHref={windImg} x="30" y="72" width="102" height="100"></image>
            <text className="currentWindText" x="66" y="125">14</text>
            <image transform="rotate(210.39999999999998, 135.03127511445913, 178.4379192527066)" width="20" height="20" x="185" y="215" xlinkHref={marker}></image>
            <rect x="0" y="165" width="158" height="35" className="currentWater"></rect>
            <text className="currentWaterText" x="40" y="189">WATER: 30℉</text>
          </g>
          <rect x="158" y="0" width="1" height="200" fill="white"></rect>
          <g>
            <rect x="159" y="0" width="791" height="30" className="titleLine"></rect>
            <text x="450" y="20" className="titleLineText">5-Day Surf Forecast</text>
          </g>
          <g>
            <rect x="159" y="30" width="158" height="170" className="dayBlock"></rect>
          </g>
          <g>
            <rect x="317" y="30" width="1" height="170" fill="white"></rect>
            <rect x="318" y="30" width="158" height="170" className="dayBlock"></rect>
          </g>
          <g>
            <rect x="476" y="30" width="1" height="170" fill="white"></rect>
            <rect x="477" y="30" width="158" height="170" className="dayBlock"></rect>
          </g>
          <g>
            <rect x="635" y="30" width="1" height="170" fill="white"></rect>
            <rect x="636" y="30" width="158" height="170" className="dayBlock"></rect>
          </g>
          <g>
            <rect x="794" y="30" width="1" height="170" fill="white"></rect>
            <rect x="795" y="30" width="158" height="170" className="dayBlock"></rect>
          </g>




          <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="wsGradient">
            <stop offset="0%" className="cl2"></stop>
            <stop offset="6.639344262295082%" className="cl2"></stop>
            <stop offset="10.278688524590164%" className="cl1"></stop>
            <stop offset="15.229508196721312%" className="cl1"></stop>
            <stop offset="20.229508196721312%" className="cl1"></stop>
            <stop offset="23.229508196721312%" className="cl1"></stop>
            <stop offset="25.229508196721312%" className="cl1"></stop>
            <stop offset="30.229508196721312%" className="cl1"></stop>
            <stop offset="40.229508196721312%" className="cl1"></stop>
            <stop offset="50.229508196721312%" className="cl2"></stop>
          </linearGradient>
          <symbol id="heatLine">
            <svg viewBox="-16.8 0 100 50" preserveAspectRatio="none" >
              <g>
                <path d="M0,30 v20 h100 v-20 Q70,10 50,30 T0,30" 
                  className="heatLine" />
              </g>
            </svg>
          </symbol>
          <use xlinkHref="#heatLine"/>
        </g>
      </svg>
    </div>
  );
}

export default App;
