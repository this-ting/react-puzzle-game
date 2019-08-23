import React, { Component } from 'react';
import './Puzzle.css';


class Puzzle extends Component {
  state = {
    numbers: [1,2,3,4,5,6,7,8,''],
    clicks: 0
  }

  // let numbers = [];
  // numbers = cell.map(cell => cell.textContent)
  // this.setState({ numbers })

  componentDidMount() {
    let cell = Array.from(document.querySelectorAll('td'));
    for (let i = 0; i < cell.length; i++) {
      cell[i].innerHTML = this.state.numbers[i]
    }
  
  }

  componentDidUpdate() {
    let cell = Array.from(document.querySelectorAll('td'));
    for (let i = 0; i < cell.length; i++) {
      cell[i].innerHTML = this.state.numbers[i]
    }
  
  }




  // gets current puzzle number and putputs into array
  handleClick = (e) => {
    let cell = Array.from(document.querySelectorAll('td'));
    let clickedNumber = parseInt(e.target.textContent);
    let clickedIndex = parseInt(e.target.className);
    let nextIndex = parseInt(e.target.className)+1;
    
    // only when user submits name can they start game
    if (this.props.name !== '') {
      console.log('you may start')
    } else {
      return
    }


    // checks if the right of clicked is empty
    if ( cell[nextIndex].innerHTML === '' ) {
      console.log('to my right is empty');
      console.log(clickedIndex)
      let numbers = this.state.numbers;
      for (let i = 0; i < numbers.length; i++ ) {
        if ( i === nextIndex ) {
          numbers[i] = clickedNumber;
        } else if (i === clickedIndex) {
          numbers[i] = '';
        } 
        console.log(numbers)
        this.setState({ numbers })
      }
    
      let clicks = this.state.clicks;
      clicks = clicks +1;
      this.setState({ clicks });


    } else {
      return
    }


  }



  render() {


    return (
      <div className='puzzleContainer'>
        <table className='boxes'>
          <tbody>
            <tr>
              <td className='0' onClick={this.handleClick}></td>
              <td className='1' onClick={this.handleClick}></td>
              <td className='2' onClick={this.handleClick}></td>
            </tr>
            <tr>
              <td className='3' onClick={this.handleClick}></td>
              <td className='4' onClick={this.handleClick}></td>
              <td className='5' onClick={this.handleClick}></td>
            </tr>
            <tr>
              <td className='6' onClick={this.handleClick}></td>
              <td className='7' onClick={this.handleClick}></td>
              <td className='8' onClick={this.handleClick}></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Puzzle;