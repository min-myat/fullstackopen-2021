import React from 'react';

const Total = ({ course }) => {
  const exercises = course.parts.map((part) => part.exercises);
  const sum = exercises.reduce((accumulator, current) => accumulator + current);

  return <p className="sm:text-xl font-bold">Totall of {sum} exercises</p>;
};

export default Total;
