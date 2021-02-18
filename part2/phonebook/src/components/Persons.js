import React from 'react'

const Persons = ({ filteredPersons }) => (
  <div>
    {filteredPersons.map(person =>
      <div key={person.name}>{person.name} {person.number}</div>
    )}
  </div>
)

export default Persons