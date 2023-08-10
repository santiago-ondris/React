import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    border: '2px solid lightgreen',
    padding: '10',
    margin: '20',
  };

  return (
    <div style={containerStyle}>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
