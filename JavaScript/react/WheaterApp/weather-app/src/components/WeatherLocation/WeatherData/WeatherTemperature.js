import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import './styles.scss';

import { CLOUD,SUN,RAIN,SNOW,THUNDER, DRIZZLE } from '../../../constants/weather';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers',
};
const getWeaterIcons = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = '4x';
    if (icon) 
        return <WeatherIcons className="weatherTemperatureCont__w-icon" name={icon} size={sizeIcon} />;
    else 
        return <WeatherIcons className="weatherTemperatureCont__w-icon" name='day-sunny' size='x2' />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {getWeaterIcons(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;