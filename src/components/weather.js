import React from 'react';
import styled from 'styled-components';

const Weather = ({item}) => {
    return (
        <div className="city">
            <h2 className="city-name">
                <span>{item.name}</span>
                <sup>{item.sys.country}</sup>
            </h2>
            <div className="city-temp">
                <img
                className="city-icon"
                src={`.././images/${item.weather[0].icon}.svg`}
                alt={item.weather[0].description}
                />
                <div className="temp-info">
                    <strong>{Math.round(item.main.temp)}
                    <sup>&deg;C</sup></strong>
                    <small>
                        Feels like <span>{Math.round(item.main.feels_like)}<sup>&deg;C</sup></span>
                    </small>
                    <p>
                        {item.weather[0].description}
                    </p>
                    <p>
                        <label>Pressure: </label>
                        {Math.round(item.main.pressure)} Pa
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Weather;
