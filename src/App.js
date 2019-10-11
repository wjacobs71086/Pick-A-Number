import React, { Component } from 'react'
import NumberForm from './numberForm'
import Answer from './answer'


const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

class App extends Component {
  state = {
    number: randomNumber,
    // null , false, true
    correct: null
  }

  handleClick = (input) => {
    console.log(`the user input ${input}`);
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
        <h1>Pick a number</h1>
        <NumberForm 
        click={this.handleClick}
        />
        <Answer 
          status={this.state.correct}
        />
      </div>
    )
  }
}

export default App;


// if(input === this.state.number){
//   return(
//     <div>
//       <h3>You are Correct!</h3>
//     </div>
//   )
// }else{
//   return(
//     <div>
//       <h3>Now Quite.</h3>
//     </div>
//   )
// }
