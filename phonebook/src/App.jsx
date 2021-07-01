import React, { useState } from 'react';

import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  return (
    <div className="flex flex-col items-center mb-4">
      <Header />
      <div className="mt-10 p-5 bg-white max-w-lg rounded shadow-md w-11/12 sm:w-[500px] md:w-[750px]">
        <Search persons={persons} />
        <hr className="my-10" />
        <ContactForm persons={persons} setPersons={setPersons} />
        <hr className="my-10" />
        <ContactInfo persons={persons} />
      </div>
    </div>
  );
};

export default App;
