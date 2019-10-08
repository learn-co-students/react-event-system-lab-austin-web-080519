// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    render(){
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        )
    }

    handleFocus = () => {return console.log('Good!')}
    handleBlur = () => {return console.log('Hey! Eyes on me!')}
}