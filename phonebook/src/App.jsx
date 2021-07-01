import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '22-364-789', id: 1 },
  ]);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="mt-10 p-5 bg-white max-w-lg rounded shadow-md">
        <ContactForm persons={persons} setPersons={setPersons} />
        <hr className="my-10" />
        <ContactInfo persons={persons} />
      </div>
    </div>
  );
};

export default App;
