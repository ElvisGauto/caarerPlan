import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={"25°"}/>
        <WeatherExtraInfo humidity={"80%"} wind={"91 m/s"}  />
    </div>
);

export default WeatherData;