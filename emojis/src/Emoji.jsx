import React, { useState } from 'react';

const Emoji = () => {
  const emojis = ['😀', '😡'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeEmoji = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '4rem' }}>{emojis[currentIndex]}</h1>
      <button onClick={changeEmoji} style={{ fontSize: '1.2rem', padding: '10px 20px', cursor: 'pointer' }}>
        Switch Emoji
      </button>
    </div>
  );
};

export default Emoji;
