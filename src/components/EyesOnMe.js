// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

  handleFocus = () => {
    console.log('Good!');
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render () {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}/>
    )
  }
}


// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.