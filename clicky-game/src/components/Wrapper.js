import React from 'react'
// import "./style.css";

function Wrapper (props) {
  console.log('wrapper', props.children)
  return <div className='container'>{props.children}</div>
}

export default Wrapper
