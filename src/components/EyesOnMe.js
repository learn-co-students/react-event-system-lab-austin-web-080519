// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    state = {  }
    render() { 
        return ( 
            <button onBlur={(e) => console.log('Hey! Eyes on me!')} onFocus={(e)=>console.log('Good!')}></button>
         );
    }
}
 
export default EyesOnMe;