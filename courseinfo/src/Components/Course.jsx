import React from 'react';

import Content from './Content';
import Header from './Header';

const Course = ({ courses }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      {courses.map((course, index) => (
        <div key={index}>
          <Content course={course} />
        </div>
      ))}
    </div>
  );
};

export default Course;
