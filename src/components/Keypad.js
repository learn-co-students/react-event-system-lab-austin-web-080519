import React, { Component } from 'react';   


class Keypad extends Component {
    passenter = () => console.log('Entering password...')

        render() {
            return (
            <div>
                <input type="password"
                onKeyUp={this.passenter}
                />
            </div>
            )
        }
}
    

export default Keypad;