import React, { useState } from 'react';
import SingleCat from './SingleCats';
import AddCatForm from './AddCatForm';

const initialCats = [
  { 
    id: 1, 
    name: 'Lion', 
    species: 'Panthera leo', 
    age: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFWThXQto_u0ECqT4XaYVssxSfSj8HMQWJw&s'
  },
  { 
    id: 2, 
    name: 'Tiger', 
    species: 'Panthera tigris', 
    age: 5,
    image: 'https://bigcatsindia.com/wp-content/uploads/2018/06/Royal-Bengal-Tiger.jpg'
  },
  { 
    id: 3, 
    name: 'Leopard', 
    species: 'Panthera pardus', 
    age: 6,
    image: 'https://www.krugerpark.co.za/images/leopard-kruger-rh-786x500.jpg'
  },
  { 
    id: 4, 
    name: 'Jaguar', 
    species: 'Panthera onca', 
    age: 4,
    image: 'https://thejaguarandallies.com/wp-content/uploads/2016/07/jaguar-1377982_1280.jpg'
  }
];  


function BigCats() {
  const [displayCats, setDisplayCats] = useState(initialCats);

  const sortByAge = () => 
    setDisplayCats([...displayCats].sort((a, b) => a.age - b.age));

  const sortByName = () => 
    setDisplayCats([...displayCats].sort((a, b) => a.name.localeCompare(b.name)));

  // 📌 TEACHER REQUEST: Filter by “Panthera”
  const filterPanthera = () => 
    setDisplayCats(initialCats.filter(cat => cat.species.startsWith('Panthera')));

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
        <button onClick={filterPanthera} style={{ marginRight: '10px' }}>Filter Panthera</button>
        <button onClick={resetCats}>Reset</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {displayCats.map(cat => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default BigCats;
