import React from 'react';

const PersonInfo = ({ person, handleDelete }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-1 items-center my-3 gap-2">
      <div>{person.name}</div>
      <div>{person.number}</div>
      <div>
        <button onClick={() => handleDelete(person.id)} className="btn-delete">
          delete
        </button>
      </div>
    </div>
  );
};

export default PersonInfo;
