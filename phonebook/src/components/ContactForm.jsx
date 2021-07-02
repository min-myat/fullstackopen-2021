import React, { useState } from 'react';

import contactServices from '../../services/persons';

const ContactForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const names = persons.map((person) => person.name.toLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (names.includes(newName.toLowerCase())) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const personToChange = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        const changedPerson = { ...personToChange, number: newNumber };
        contactServices
          .edit(personToChange.id, changedPerson)
          .then((data) =>
            setPersons(
              persons.map((person) =>
                person.id === personToChange.id ? data : person
              )
            )
          );
      }
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1,
        number: newNumber,
      };
      contactServices
        .create(newPerson)
        .then((person) => setPersons(persons.concat(person)));
    }
    setNewNumber('');
    setNewName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="py-4 font-bold">
        Add Contact
      </label>
      <div className="my-4" />
      <div className="grid gap-3 mx-8">
        <div>
          <input
            required
            id="name"
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <input
            required
            type="text"
            placeholder="Number"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div className="justify-self-center mt-4">
          <button className="btn" type="submit">
            add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
