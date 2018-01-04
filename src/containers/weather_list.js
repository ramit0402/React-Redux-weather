import React, { Component } from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        if(!cityData) {
            return;
        }
        const name = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        console.log(temperature);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines height = {120} width = {180} data = {temperature}>
                        <SparklinesLine color = "red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height = {120} width = {180} data = {pressure}>
                        <SparklinesLine color = "green"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height = {120} width = {180} data = {humidity}>
                        <SparklinesLine color = "blue"/>
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Presssure</th>
                        <th>Humidity</th>
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