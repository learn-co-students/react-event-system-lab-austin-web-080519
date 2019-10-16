import React, { Component } from "react";

class EyesOnMe extends Component {
  render() {
    return (
      <div>
        <button
          onBlur={event => console.log("Hey! Eyes on me!")}
          onFocus={event => console.log("Good!")}
        ></button>
      </div>
    );
  }
}

export default EyesOnMe;
