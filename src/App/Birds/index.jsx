// Birds
import React from 'react';
import './style.css';
import Bird from './Bird'
import birds from './bird-data'


const Birds = () => {
  console.log('birds', birds)

  const renderBirds = birds.map((b, index) => (
    <Bird
      name={b.name}
      color={b.color}
      file={b.file}
    />
  ))
  return (
    <div className="App">
      <h1>Birds</h1>
      {renderBirds}
    </div>
  )
}

export default Birds;
