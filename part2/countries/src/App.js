import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryQueryInput = ({ handleFilterChange }) => (
  <div>
    find countries <input onChange={handleFilterChange}></input>
  </div>
)

const CountryQueryResults = ({ filteredCountries, handleShowCountryClick, openedCountries }) => {
  if (filteredCountries.length > 10) {
    return "Too many countries, specify another filter"
  }

  if (filteredCountries.length === 0) {
    return "No country found, specify another filter"
  }
  
  if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries[0]} />
  } 

  return (
    <div>
      {filteredCountries.map(country => 
        <div key={country.name}>
          {country.name} 
          <button value={country.name} onClick={handleShowCountryClick}>
            {openedCountries.includes(country.name) ? "hide" : "show"}
          </button>
          {openedCountries.includes(country.name) ? <CountryDetails country={country} /> : ""}
        </div>
      )}
    </div>
  )
}

const CountryDetails = ({country}) => {
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

const CapitalWeather = ({weatherData}) => (
  <div>
    <div><strong>temperature:</strong> {weatherData.current.temperature}° Celsius</div>
    <div><img src={weatherData.current.weather_icons} /></div>
    <div><strong>wind:</strong> {weatherData.current.wind_speed} km/h {weatherData.current.wind_dir}</div>
  </div>
)

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [openedCountries, setOpenedCountries] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const handleFilterChange = (event) => setFilter(event.target.value)
  const handleShowCountryClick = (event) => {
    if (openedCountries.includes(event.target.value)) {
      return setOpenedCountries(openedCountries.filter(country => event.target.value != country))
    }

    setOpenedCountries(openedCountries.concat(event.target.value))
  }

  const filteredCountries =
    countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <CountryQueryInput handleFilterChange={handleFilterChange} />
      <CountryQueryResults
        filteredCountries={filteredCountries}
        handleShowCountryClick={handleShowCountryClick}
        openedCountries={openedCountries}
      />
    </div>
  )
}

export default App;