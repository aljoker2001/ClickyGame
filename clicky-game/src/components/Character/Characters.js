import React from 'react'
import './Character.css'

const AddCard = (props) => {
  console.log('pokemon passed to card', props)
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
