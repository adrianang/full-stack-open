import React from 'react'

const CountryQueryInput = ({ handleFilterChange }) => (
  <div>
    find countries <input onChange={handleFilterChange}></input>
  </div>
)

export default CountryQueryInput