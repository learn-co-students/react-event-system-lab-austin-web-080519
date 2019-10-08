// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    state = {  }
    render() { 
        return ( 
            <input type='password' onKeyUp={(e) => console.log('Entering password...')}></input>
         );
    }
}
 
export default Keypad;