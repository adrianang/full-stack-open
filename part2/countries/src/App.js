import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryQueryInput = ({ handleFilterChange }) => (
  <div>
    find countries <input onChange={handleFilterChange}></input>
  </div>
)

const CountryQueryResults = ({ filteredCountries }) => {
  if (filteredCountries.length > 10) {
    return "Too many countries, specify another filter"
  }

  if (filteredCountries.length === 0) {
    return "No country found, specify another filter"
  }
  
  if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries[0]}/>
  } 

  return (
    <div>
      {filteredCountries.map(country => <div key={country.name}>{country.name}</div>)}
    </div>
  )
}

const CountryDetails = ({country}) => (
  <div>
    <h1>{country.name}</h1>
    <div>capital: {country.capital}</div>
    <div>population: {country.population}</div>

    <h2>languages</h2>
    <ul>
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
    </ul>

    <img src={country.flag} width="300" />
  </div>
)

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const handleFilterChange = (event) => setFilter(event.target.value)

  const filteredCountries =
    countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <CountryQueryInput handleFilterChange={handleFilterChange} />
      <CountryQueryResults filteredCountries={filteredCountries} />
    </div>
  )
}

export default App;
