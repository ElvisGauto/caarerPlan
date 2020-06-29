import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData';

import "./style.scss";

const WeatherLocation = () => (
    <div className="weatherLocation">
        <Location city={"Barcelona"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;