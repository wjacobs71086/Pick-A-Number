import React, { Component } from 'react'

export class Answer extends Component {
  render() {
    if (this.props.status === true){
    //This is correct
    return ( 
      <h3 className="correct">You are Correct!</h3>
    )
    }else if(this.props.status === false){
    //this is incorrect
    return ( 
      <h3 className="wrong">Not Quite.</h3>
    )
    }else{
    // unanswered
    return ( 
      <p className="try"></p>
    )
    }
  }
}

export default Answer
