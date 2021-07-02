import React from 'react';
import PersonInfo from './PersonInfo';

const ContactInfo = ({ persons, handleDelete }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-3">Numbers</h2>
      <div>
        {persons.map((person) => (
          <div className="my-1" key={person.id}>
            <PersonInfo person={person} handleDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
