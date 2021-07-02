import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FindCountry from './components/FindCountry';

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all';
    axios.get(url).then(({ data }) => setCountries(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-4 w-full bg-green-400 text-center shadow mb-6">
        <h1 className="text-3xl text-white font-bold uppercase">Countries</h1>
      </div>

      {countries && (
        <div className="w-1/2 bg-white rounded shadow-md p-6 mb-8">
          <FindCountry countries={countries} />
        </div>
      )}
    </div>
  );
}

export default App;
