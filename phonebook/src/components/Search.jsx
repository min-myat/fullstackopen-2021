import React, { useState } from 'react';
import PersonInfo from './PersonInfo';

const Search = ({ persons }) => {
  const [inputValue, setInputValue] = useState('');

  const found = persons.filter((person) =>
    person.name.toLowerCase().includes(inputValue)
  );

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by name"
        className="my-4"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      />
      {inputValue &&
        found.map((person) => (
          <div className="my-1" key={person.id}>
            <PersonInfo name={person.name} number={person.number} />
          </div>
        ))}
    </div>
  );
};

export default Search;
