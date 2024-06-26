import React from "react";

const Button = (props) => {

    //let audio = new Audio("/Sweden.mp3")
    let audio = new Audio(props.name)

    const handleClick = () => {
        audio.play()
        alert('Button clicked!');
    };
  
    return (
      <button onClick={handleClick}>
        Click Me
      </button>
    );
  };
  
  export default Button;
  