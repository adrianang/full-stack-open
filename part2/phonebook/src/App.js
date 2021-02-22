import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    noteService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      return window.alert(`${newName} is already added to phonebook`);
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    noteService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setName('')
        setNumber('')
      })
  }

  const deletePerson = (id) => {
    const nameToDelete = persons.find(person => person.id === id).name
    if (window.confirm(`Delete ${nameToDelete}?`)) {
      noteService
        .remove(id)
        .then(returnedPersons => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleNameChange = (event) => setName(event.target.value)
  const handleNumberChange = (event) => setNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const filteredPersons = persons.filter(person => person.name.toLowerCase()
                                                              .includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>Add a New Contact</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        filteredPersons={filteredPersons} 
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App;