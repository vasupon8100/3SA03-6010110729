import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';


const word = ['EASY','NORMOL','HARDCORE']
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component {
  constructor(){
    super()
    this.state={
      requestHint: false
    }
  }

  newgame = () => {
    window.location.reload(false);
  }
  requestHint = () =>{
    this.setState({requestHint: true});
  }
  getHint = (chars) =>{
    document.getElementById('hints').innerHTML = `Hint : ${chars}`;
  }
  getAnswer = (answer) => {
    document.getElementById('complete').innerHTML = `Answer : ${answer}`;
  }
  render() {
    
    return (
      <div className= "App">
        <h1 className="welcom">Let's Have Fun</h1>
        <h2 id="close"></h2>

        <WordCard value={item.toUpperCase()} requestHint = {this.state.requestHint} getHint={this.getHint} getAnswer={this.getAnswer}/>
        <h1 id="result"></h1>

        <h2 id="your-answer"></h2>
        <br></br>

        <button id="newgame" className="button" onClick={this.newgame}>New Game</button>
        <br></br><br></br>
        <button id ="hint" className = "button" onClick={this.requestHint}>Hint</button>
        <br></br>
        <p id ="hints"></p>
      </div>
      
    );

  }
}
export default App;