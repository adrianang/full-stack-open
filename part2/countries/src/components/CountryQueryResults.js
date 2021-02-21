import React from 'react'
import CountryDetails from './CountryDetails'

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

export default CountryQueryResults