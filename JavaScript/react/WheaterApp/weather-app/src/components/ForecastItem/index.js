import React from 'react';
import PropTypes from 'prop-types';

import WeatherData from './../WeatherLocation/WeatherData';
import './style.scss';

const ForecastItem = ({ weekDay, hour, data }) => {
    return (
        <div className="forecastItemCont">
            <div className="forecastItemCont__title">
               <h3>{weekDay} Hora: {hour} hs</h3> 
            </div>
            <WeatherData data={data}></WeatherData>
        </div>
    );
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
    }),
}

export default ForecastItem;