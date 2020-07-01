import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city='Buenos Aires,ar' />
        <WeatherLocation city='Florida,us' />
        <WeatherLocation city='Ushuaia,ar' />
    </div>
);

export default LocationList;