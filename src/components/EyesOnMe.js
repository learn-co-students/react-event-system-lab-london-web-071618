// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

  focusing = () => {
    console.log('Good!')
  }

  bluring = () => {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.focusing} onBlur={this.bluring}></button>
    )
  }
}

export default EyesOnMe
