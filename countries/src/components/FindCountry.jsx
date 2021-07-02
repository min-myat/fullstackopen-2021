import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FindCountry = ({ countries }) => {
  const [inputValue, setInputValue] = useState('');
  const [weather, setWeather] = useState();
  const [foundCountries, setFoundCountries] = useState([]);

  useEffect(() => {
    setFoundCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue]);

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    if (foundCountries.length === 1) {
      const country = foundCountries[0];

      const timeoutId = setTimeout(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${key}&units=metric`
          )
          .then(({ data }) => {
            console.log('fetching');
            setWeather(data);
          })
          .catch((error) => console.log(error.message));
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [foundCountries]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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

          <div className="my-">
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
          {weather && <hr className="my-4" />}
          {weather && (
            <div className="my-5">
              <h1 className="font-semibold text-lg">
                Weather in {country.capital}
              </h1>
              <p className="mt-1">
                <span className="font-semibold mr-6">Temperature</span>{' '}
                {weather.main.temp} C
              </p>
              <p className="mt-1">
                <span className="font-semibold mr-6">
                  {weather.weather[0].main}
                </span>{' '}
                {weather.weather[0].description}
              </p>
              <p className="mt-1">
                <span className="font-semibold mr-6">Wind </span>{' '}
                {weather.wind.speed} mph
              </p>
            </div>
          )}
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
        onChange={(e) => handleInputChange(e)}
      />
      <div className="mt-6">{renderFound()}</div>
    </>
  );
};

export default FindCountry;
