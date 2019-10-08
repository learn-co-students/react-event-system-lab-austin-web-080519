// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    focusAction = () => {
        console.log('Good!')
    }

    blurAction = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (
            <button 
            onFocus={this.focusAction}
            onBlur={this.blurAction}
            />
        )
    }
}
