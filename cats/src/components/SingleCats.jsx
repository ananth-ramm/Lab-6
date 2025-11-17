import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <h3>{cat.name}</h3>
      <p>Species: {cat.species}</p>
      <p>Age: {cat.age}</p>
    </div>
  );
};

export default SingleCat;
