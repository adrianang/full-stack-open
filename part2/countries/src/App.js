import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryQueryInput from './components/CountryQueryInput'
import CountryQueryResults from './components/CountryQueryResults'

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