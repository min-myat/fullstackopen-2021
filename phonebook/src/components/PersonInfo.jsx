import React from 'react';

const PersonInfo = ({ name, number }) => {
  return (
    <div className="flex">
      <div className="min-w-[150px] mr-2">{name}</div> <>{number}</>
    </div>
  );
};

export default PersonInfo;
