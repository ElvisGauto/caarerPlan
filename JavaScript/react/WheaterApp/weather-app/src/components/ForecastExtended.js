import React, { Component } from 'react';
import PropTypes from 'prop-types';

import transformForecast from './../services/transformForecast';
import ForecastItem from './ForecastItem/index';
import './style.scss';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
// ]    

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'sun',
//     wind: '10'
// }
const api_key = "c87b76b064f29970a0c21e3b5bafe429";
const url = "http://api.openweathermap.org/data/2.5/forecast"
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        // fetch or axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast)
            .then(response => response.json())
            .then(weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData })
            })
    }

    renderForecastItemDays(forecastData) {
        // return <h4>Render Items</h4>;
       return forecastData.map( forecast => (
       <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}></ForecastItem>
       ));
    }

    renderProgress = () => {
        return <h3>Cargando Pronostico Extendido...</h3>
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div className="forecastExtendedCont">
              <h4 className="forecastExtendedCont__title">
              Pronóstico Extendido para {city}
              </h4>  
                {forecastData ? 
                this.renderForecastItemDays(forecastData) : 
                this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;