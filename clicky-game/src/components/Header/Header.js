import React from 'react';

class Header extends React.Component {
    state = {
        score: 0,
        top: 0
    }
    render() {
        return (
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                Pokemon Clicky Game!
              </div>
              <div className="card-body">
                <p className="card-text">Score: {this.state.correct} | Top Score: {this.state.top}</p>
                <button className="btn btn-primary mx-1" onClick={this.handleIncrement}>
                  Increment
                </button>
                <button className="btn btn-danger mx-1" onClick={this.handleDecrement}>
                  Decrement
                </button>
              </div>
            </div>
        )
    }
}

export default Header;