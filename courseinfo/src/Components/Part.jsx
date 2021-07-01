import React from 'react';

const Part = ({ part }) => {
  return (
    <p className="text-xl">
      {part.name} {part.exercises}
    </p>
  );
};

export default Part;
