import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3001/persons';
    axios.get(url).then(({ data }) => setPersons(data));
  }, []);

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
