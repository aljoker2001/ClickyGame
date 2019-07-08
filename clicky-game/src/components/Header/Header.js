import React from 'react';
import './Header.css'

const Header = (props) => {
        return (
            <div className="text-center">
              <h1 className="card-header bg-danger text-white border-bottom border-dark">
                Pokemon Clicky Game!
              </h1>
              <div className="card-body border-top border-dark bg-white">
                <h3 className="card-text">Score: {props.score} | Top Score: {props.top}</h3>
              </div>
            </div>
        )
    }

export default Header;