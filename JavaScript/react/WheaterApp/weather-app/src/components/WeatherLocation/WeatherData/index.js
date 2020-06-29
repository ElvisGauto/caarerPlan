import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    WINDY,
} from '../../../constants/weather';
import './styles.scss';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature={25}
        weatherState={WINDY}/>
        <WeatherExtraInfo humidity={80} wind={"91 m/s"}  />
    </div>
);

export default WeatherData;