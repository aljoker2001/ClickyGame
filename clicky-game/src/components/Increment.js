import React from 'react'

class Increment extends React.Component {
    state = {
        score: 0,
        top: 0
    }
    handleIncrement = () => {
      this.setState({score: this.state.score + 1})
      console.log('score', this.state.score)
    }
}