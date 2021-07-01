import React from 'react';
import PersonInfo from './PersonInfo';

const ContactInfo = ({ persons }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-3">Numbers</h2>
      <div>
        {persons.map((person) => (
          <div className="my-1" key={person.id}>
            <PersonInfo name={person.name} number={person.number} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
