import React, { Component } from 'react'


class NumberForm extends Component {
  render() {
    return (
      <div className="input">
        <form
        onSubmit={event =>{
          event.preventDefault()
          let userInput = event.target.input.value
          return this.props.click(userInput);
        }}>
          <label>Between 1-10</label>
            <input 
              type="number" 
              name="input"
              min="1" max="10"
              />
            <button>button</button>
        </form>
      </div>
    )
  }
}

export default NumberForm
