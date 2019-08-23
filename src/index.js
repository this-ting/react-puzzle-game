import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header.js'
import Game from './Game/Game.js';
import Ranking from './Ranking/Ranking.js';
import './css/normalize.css';
import './css/skeleton.css';


class App extends Component {
  state = {
    name: '',
    steps:'',
    completete: false
  }

  setName = (name) => {
    console.log(name)
    this.setState(name)
    console.log('youve set the name in state')
  }

  render() {
    return (
      <div className="container">  
        <BrowserRouter>
          <Header />
          <Route exact path='/' render={() => <Game setName={ this.setName } name={ this.state.name }/>} />
          <Route path='/ranking' component={Ranking} />
        </BrowserRouter>
        
        
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.querySelector('#root'));