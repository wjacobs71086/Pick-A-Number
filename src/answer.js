import React, { Component } from 'react'

export class Answer extends Component {
  render() {

    if (this.props.status === true){
    //This is correct
    return ( 
      <h3>You are Correct!</h3>
    )
    }else if(this.props.status === false){
          //this is incorrect
    return ( 
      <h3>Now Quite.</h3>
    )
    }else{
    // unanswered
    return ( 
      <h3>give it a try</h3>
    )
    }
  }
}

export default Answer
