import { colours } from '../utilities/defaults';
import Square from './Square';

const DefaultColours = (props: any) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {
        Object.keys(colours).map((colour, key) => {
          return (
            <Square 
              key={key} 
              colour={colour} 
              selectedColour={props.selectedColour} 
              setSelectedColour={props.setSelectedColor} 
              border={true} 
            />
          )}
        )
      }
    </div>
  );
}

export default DefaultColours;