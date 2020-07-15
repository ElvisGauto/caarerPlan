import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className="weatherExtraInfoCont">
            <span className="weatherExtraInfoCont__extraInfoText">{`Humedad: ${humidity}% - `}</span>
            <span className="weatherExtraInfoCont__extraInfoText">{`Viento: ${wind}`}</span>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;