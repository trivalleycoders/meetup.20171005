import React from 'react';
import './style.css';

const Bird = (props) => {

  return (
    <div>
      <div>{props.name}</div>
      <img src={`images/${props.file}`} alt={props.name} />
      <div>{props.color}</div>
    </div>
  )
}

export default Bird
