import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';

import './styles.scss';

const WeatherData = ({ data : {temperature, weatherState, humidity, wind } }) => {
   return (
    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature={temperature}
        weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}  />
    </div>
   );   
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
    }),
};

export default WeatherData;