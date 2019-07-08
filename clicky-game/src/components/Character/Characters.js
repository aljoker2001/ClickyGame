import React from 'react'
import './Character.css'

const AddCard = (props) => {
  return (
    <div className='col-3'>
      <div className='img-container text-white'>
        <img alt={props.name} src={props.image} data-clicked={props.clicked.toString()} title={props.name} onClick={props.handleIncrement} />
      </div>
    </div>
  )
}

export default AddCard
