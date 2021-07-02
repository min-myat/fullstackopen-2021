import React, { useState, useEffect } from 'react';

import personServices from '../services/persons';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';
import Notification from './components/Notification';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personServices.getAll().then((datas) => setPersons(datas));
  }, []);

  const handleDelete = (id) => {
    if (
      window.confirm(
        `Delete ${persons.find((person) => person.id === id).name}?`
      )
    ) {
      personServices
        .deletePerson(id)
        .then((response) =>
          setPersons(persons.filter((person) => person.id !== id))
        );

      setMessage(`Deleted ${persons.find((person) => person.id === id).name}`);
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <Header />
      <div className="mt-10 p-5 bg-white rounded shadow-md max-w-4xl">
        <Search persons={persons} handleDelete={handleDelete} />
        <hr className="my-10" />
        <ContactForm persons={persons} setPersons={setPersons} />
        <hr className="my-10" />
        <ContactInfo
          setPersons={setPersons}
          persons={persons}
          handleDelete={handleDelete}
        />
        <Notification message={message} />
      </div>
    </div>
  );
};

export default App;
