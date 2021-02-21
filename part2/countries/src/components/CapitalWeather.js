import React from 'react'

const CapitalWeather = ({ weatherData }) => (
  <div>
    <div><strong>temperature:</strong> {weatherData.current.temperature}° Celsius</div>
    <div><img src={weatherData.current.weather_icons} /></div>
    <div><strong>wind:</strong> {weatherData.current.wind_speed} km/h {weatherData.current.wind_dir}</div>
  </div>
)

export default CapitalWeather