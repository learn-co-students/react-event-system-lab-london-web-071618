import React from 'react'

export default class EyesOnMe extends React.Component {

        focuseResp () {
            console.log('Good!')
        }

        blurResp () {
            console.log('Hey! Eyes on me!')
        }
    render (){
     return (<button onFocus={this.focuseResp} onBlur={this.blurResp}>Some Button</button>)
    }

}