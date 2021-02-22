import React from 'react'

const Persons = ({ filteredPersons, deletePerson }) => (
  <div>
    {filteredPersons.map(person =>
      <div key={person.name}>
        {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
      </div>
    )}
  </div>
)

export default Persons