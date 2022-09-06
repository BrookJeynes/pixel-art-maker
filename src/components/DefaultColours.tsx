import { colours } from '../utilities/defaults';
import Square from './Square';

const DefaultColours = (props: any) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
      {
        Object.keys(colours).map((colour, key) => {
          return (
            <Square 
              key={key} 
              colour={colour} 
              selectedColour={props.selectedColour} 
              setSelectedColour={props.setSelectedColor} 
              border={true} 
              direction='row'
            />
          )}
        )
      }
    </div>
  );
}

export default DefaultColours;