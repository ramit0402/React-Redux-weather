import React, { Component } from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMaps from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        if(!cityData) {
            return;
        }
        const name = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMaps lat = {lat} lon = {lon}/></td>
                <td><Chart data = {temperature} unit = "K" color = "orange" /></td>
                <td><Chart data = {pressure} unit = "hPa" color = "green" /></td>
                <td><Chart data = {humidity} unit = "%" color = "black" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Presssure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);