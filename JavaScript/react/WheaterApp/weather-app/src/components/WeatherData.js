import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    FOG,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weather';

const WeatherData = () => (
    <div>
        <WeatherTemperature 
        temperature={"25°"}
        weatherState={WINDY}/>
        <WeatherExtraInfo humidity={"80%"} wind={"91 m/s"}  />
    </div>
);

export default WeatherData;