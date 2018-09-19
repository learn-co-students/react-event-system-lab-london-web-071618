// Code EyesOnMe Component Here
import React from 'react';

export default class  EyesOnMe extends React.Component {
    render() {

        const focusEvent = () => {
            console.log("Good!")
        }

        const blurEvent = () => {
            console.log("Hey! Eyes on me!")
        }

        return (
            <button onFocus = {focusEvent} onBlur = {blurEvent} />
        )
    }
}

