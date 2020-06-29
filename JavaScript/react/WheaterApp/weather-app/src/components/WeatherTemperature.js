import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    FOG,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weather';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [FOG]: 'day-fog',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
};
const getWeaterIcons = weatherState => {
    const icon = icons[weatherState];
    if (icon) 
        return <WeatherIcons name={icon} size='x2' />;
    else 
        return <WeatherIcons name='day-sunny' size='x2' />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeaterIcons(weatherState)}
        <span>{`${temperature} C°`}</span>
    </div>
);


export default WeatherTemperature;