import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    getAttention = () => console.log('Hey! Eyes on me!')
    praise = () => console.log('Good!')

    render() {
        return (
            <button onFocus={this.praise} onBlur={this.getAttention}>Hey<button/>
        )
    }
}