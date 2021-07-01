import React from 'react';

export default function ContactInfo({ persons }) {
  return (
    <div>
      <h2 className="font-bold text-lg mb-6">Numbers</h2>
      <div>
        {persons.map((person) => (
          <div className="my-1" key={person.name}>
            {person.name}
          </div>
        ))}
      </div>
    </div>
  );
}
