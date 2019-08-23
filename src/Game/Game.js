import React, { Component } from 'react';
import Puzzle from './Puzzle.js';

class Game extends Component {
  state = {
    name: '',
    steps:'',
    completete: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { setName } = this.props
    setName(this.state);
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }


  render() {
    let playerReady;
    if (this.props.name == '') {
      playerReady = (
        <form onSubmit={this.handleSubmit}>
          <label>Please input your name to start: </label>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit">Start game!</button>
        </form>
      )
    } else {
      playerReady = (
      <p>Let's get started {this.props.name} ! 
      Click on any of the adjacent boxes to the blank box to make a move.
      Once all the boxes are aligned in the right order, you WIN!</p>
      )

    };

    return(
      <div>
        <h1>React Puzzle Game</h1>
        {playerReady}
        <Puzzle name={this.props.name}/>
      </div>
    )
  }
}

export default Game;