import React from 'react';
import './Header.css'

const Header = (props) => {
  // console.log('header', props)
        return (
            <div className="card text-center">
              <h1 className="card-header bg-primary text-white">
                Pokemon Clicky Game!
              </h1>
              <div className="card-body">
                <h3 className="card-text">Score: {props.score} | Top Score: {props.top}</h3>
              </div>
            </div>
        )
    }

export default Header;