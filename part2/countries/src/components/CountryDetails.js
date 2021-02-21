import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CapitalWeather from './CapitalWeather'

const CountryDetails = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null)
  const api_key = process.env.REACT_APP_API_KEY

  const hook = () => {
    if (country.capital === '') {
      return null
    }

    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then(response => {
        setWeatherData(response.data)
      })
  }
  useEffect(hook, [])

  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital: {country.capital}</div>
      <div>population: {country.population}</div>

      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>

      <img src={country.flag} width="300" />

      <h2>Weather in {country.capital ? country.capital : country.name}</h2>
      {weatherData ? <CapitalWeather weatherData={weatherData} /> : `Loading weather data for ${country.capital}...`}
    </div>
  )
}

export default CountryDetails