import React, { useState } from 'react';
import SingleCat from './SingleCats';
import AddCatForm from './AddCatForm';

const initialCats = [
  { id: 1, name: 'Lion', species: 'Panthera leo', age: 8 },
  { id: 2, name: 'Tiger', species: 'Panthera tigris', age: 5 },
  { id: 3, name: 'Leopard', species: 'Panthera pardus', age: 6 },
  { id: 4, name: 'Jaguar', species: 'Panthera onca', age: 4 },
];

function BigCats() {
  const [displayCats, setDisplayCats] = useState(initialCats);

  const sortByAge = () => setDisplayCats([...displayCats].sort((a, b) => a.age - b.age));
  const sortByName = () => setDisplayCats([...displayCats].sort((a, b) => a.name.localeCompare(b.name)));
  const filterOlderThan5 = () => setDisplayCats(initialCats.filter(cat => cat.age > 5));
  const resetCats = () => setDisplayCats(initialCats);

  const addCat = (newCat) => {
    setDisplayCats([...displayCats, newCat]);
  };

  return (
    <div>
      <h2>Big Cats</h2>

      <AddCatForm onAddCat={addCat} />

      <div style={{ marginBottom: '20px' }}>
        <button onClick={sortByAge} style={{ marginRight: '10px' }}>Sort by Age</button>
        <button onClick={sortByName} style={{ marginRight: '10px' }}>Sort by Name</button>
        <button onClick={filterOlderThan5} style={{ marginRight: '10px' }}>Filter Age &gt; 5</button>
        <button onClick={resetCats}>Reset</button>
      </div>

      {displayCats.map(cat => (
        <SingleCat key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export default BigCats;
