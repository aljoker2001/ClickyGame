import React from 'react'
import './Character.css'
import '../Header/Header.js'
// import Header from '../Header/Header.js';

const AddCard = (props) => {
  return (
    <div className='card col-3'>
      <div className='img-container'>
        <img alt={props.name} src={props.image} title={props.clicked.toString()} onClick={props.handleIncrement} />
      </div>
      <div className='content text-center'>
        <p><strong>{props.name}</strong></p>
      </div>
    </div>
  )
}

export default AddCard
