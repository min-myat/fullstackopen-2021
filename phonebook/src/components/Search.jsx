import React, { useState } from 'react';
import PersonInfo from './PersonInfo';

const Search = ({ persons, handleDelete }) => {
  const [inputValue, setInputValue] = useState('');

  const found = persons.filter((person) =>
    person.name.toLowerCase().includes(inputValue)
  );

  const renderFound = () => {
    if (inputValue && found.length === 0) {
      return <div>No matches</div>;
    } else if (inputValue) {
      return found.map((person) => (
        <div className="my-1" key={person.id}>
          <PersonInfo person={person} handleDelete={handleDelete} />
        </div>
      ));
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by name"
        className="my-4"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      />
      {renderFound()}
    </div>
  );
};

export default Search;
