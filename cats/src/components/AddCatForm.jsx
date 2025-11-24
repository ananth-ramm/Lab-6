import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !species || !age || !image) return;

    const newCat = {
      id: Date.now(),
      name,
      species,
      age: Number(age),
      image
    };

    onAddCat(newCat);

    setName('');
    setSpecies('');
    setAge('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />

      <input
        type="text"
        placeholder="Species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        style={{ marginRight: '10px' }}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginRight: '10px', width: '60px' }}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ marginRight: '10px', width: '200px' }}
      />

      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
