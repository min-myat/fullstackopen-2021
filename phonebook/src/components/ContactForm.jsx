import React, { useState } from 'react';

const ContactForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const names = persons.map((person) => person.name.toLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (names.includes(newName.toLowerCase())) {
      alert(`${newName} is already added to the phone book`);
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1,
        number: newNumber,
      };
      setPersons([...persons, newPerson]);
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
