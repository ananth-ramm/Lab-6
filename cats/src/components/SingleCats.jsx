import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '8px',
        maxWidth: '300px'
      }}
    >
      <h3>{cat.name}</h3>

      {/* Cat Image */}
      {cat.image && (
        <img
          src={cat.image}
          alt={cat.name}
          style={{ width: '100%', borderRadius: '6px', marginBottom: '10px' }}
        />
      )}

      <p><strong>Species:</strong> {cat.species}</p>
      <p><strong>Age:</strong> {cat.age}</p>
    </div>
  );
};

export default SingleCat;

