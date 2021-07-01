import React from 'react';

const Part = ({ part }) => {
  return (
    <div className="sm:text-xl flex">
      <div className="w-56 sm:w-64">{part.name}</div> {part.exercises}
    </div>
  );
};

export default Part;
