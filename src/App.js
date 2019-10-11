import React, { Component } from 'react'
import NumberForm from './numberForm'
import Answer from './answer'
import './App.css';


const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

class App extends Component {
  state = {
    number: randomNumber,
    // null , false, true
    correct: null
  }

  handleClick = (input) => {
    console.log(input, this.state.number);
    if(this.state.number === input){
      this.setState({
        correct: true
      })
    } else {
      this.setState({
        correct:false
      })
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">PICK A NUMBER</h1>
        <Answer 
          status={this.state.correct}
        />
        <NumberForm 
        click={this.handleClick}
        />
        
      </div>
    )
  }
}

export default App;