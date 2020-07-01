import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import "./style.scss";
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherCity';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather)
            .then(response => response.json())
            .then(data => {
                console.log('result: handleUpdateClick');
                const newWeather = transformWeather(data);
                console.log(newWeather);
                this.setState({
                    city: data.name,
                    data: newWeather
                });
            })
        console.log('actualizado');
    }

    render() {
        console.log('render');
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {
                data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;