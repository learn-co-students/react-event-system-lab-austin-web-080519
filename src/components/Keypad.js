// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    render(){
        return (
            <input onKeyUp={this.handleKeyUp} type="password" />
        )
    }

    handleKeyUp = () => {return console.log('Entering password...')}
}