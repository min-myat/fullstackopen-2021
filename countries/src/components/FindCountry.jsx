import React, { useState } from 'react';

const FindCountry = ({ countries }) => {
  const [inputValue, setInputValue] = useState('');

  const foundCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleClick = (country) => {
    setInputValue(country.name);
  };

  const renderFound = () => {
    if (!inputValue) return null;

    if (foundCountries.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    }

    if (foundCountries.length === 1) {
      const country = foundCountries[0];
      return (
        <>
          <h1 className="font-bold text-2xl text-green-600">{country.name}</h1>

          <div className="my-5">
            <h1 className="font-semibold">
              Capital{' '}
              <span className="font-normal ml-6">{country.capital}</span>
            </h1>
            <h1 className="font-semibold">
              Population{' '}
              <span className="font-normal ml-6">{country.population}</span>
            </h1>
          </div>

          <div className="my-5">
            <h1 className="font-semibold text-lg">Languages</h1>
            <ul className="list-disc">
              {country.languages.map((lang) => (
                <li className="ml-8 mt-2" key={lang.iso639_2}>
                  {lang.name} (
                  <span className="font-semibold"> Native Name: </span>
                  {lang.nativeName} )
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center mt-6 py-4 rounded bg-gray-50">
            <img src={country.flag} alt="flag" width={250} />
          </div>
        </>
      );
    }

    return foundCountries.map((country) => {
      return (
        <div key={country.alpha3Code} className="my-4">
          <span className="mr-3">{country.name} </span>
          <button onClick={() => handleClick(country)} className="btn">
            show
          </button>
        </div>
      );
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="find country"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="mt-6">{renderFound()}</div>
    </>
  );
};

export default FindCountry;
