import React from 'react';

import Part from './Part';
import Total from './Total';

const Content = ({ course }) => {
  return (
    <div className="mt-10 mx-2 rounded shadow p-6 bg-white min-w-[300px]">
      <h1 className="text-xl font-bold mb-6">{course.name}</h1>
      {course.parts.map((part) => (
        <div key={part.id}>
          <Part part={part} />
        </div>
      ))}
      <hr className="my-6" />
      <Total course={course} />
    </div>
  );
};

export default Content;
