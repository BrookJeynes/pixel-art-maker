import React, { useState, useEffect } from 'react';
import { returnIcon } from '../utilities/returnIcon';
import { colours } from '../utilities/defaults';

const Square = (props: any) => {
  const defaultColour = props.colour;
  const utility = props.icon;

  const [colour, setColour] = useState(props.colour);

  useEffect(() => {
    if (colours[props.colour]) {
      setColour(colours[props.colour]);
      return;
    }

    setColour(props.colour);
  }, [props.colour]);

  const handleClick = () => {
    if (props.setSelectedUtility) {
      props.setSelectedUtility(utility)
      return;
    }

    if (props.setSelectedColour) { 
      props.setSelectedColour(colour);
      return;
    }

    switch (props.selectedUtility) {
      case "Eraser":
        setColour(defaultColour);
        break;
      case "Brush":
        setColour(props.selectedColour);
        break; 
    }
  }

  return (
    <button 
      className={props.border ? "BorderedSquare" : "Square"} 
      style={{backgroundColor: `${colour}`}}
      onClick={handleClick}
      disabled={props.disabled ? true : false}
    >
      {props.icon && returnIcon(props.icon)}
    </button>
  );
};

export default Square;