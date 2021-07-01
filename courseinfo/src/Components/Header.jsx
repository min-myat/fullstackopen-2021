import React from 'react';

const Header = ({ course }) => {
  return (
    <div className="bg-emerald-600 py-4 text-center w-full">
      <h1 className="text-4xl uppercase text-white font-bold tracking-wide">
        {course.name}
      </h1>
    </div>
  );
};

export default Header;
