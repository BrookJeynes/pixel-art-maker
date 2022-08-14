import { range } from '../utilities/range';
import Square from './Square';
import { colours } from '../utilities/defaults';


const Canvas = (props: any) => {
  const chooseColour = (row: number, column: number) => {
    if ((column % 2 === 0 && row % 2 !== 0) || (column % 2 !== 0 && row % 2 === 0)) {
      return colours.white;
    }

    return 'rgb(217, 217, 217)';
  }

  return (
    <div className="Canvas">
      {
        range(1, props.canvas.height).map((column: number) => { 
          return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
              {
                range(1, props.canvas.width).map((row: number, key: number) => 
                  <Square 
                    key={key} 
                    selectedColour={props.selectedColour} 
                    selectedUtility={props.selectedUtility} 
                    colour={chooseColour(row, column)}
                  />
                )}
            </div>
          )
        })
      }
    </div>
  )
}

export default Canvas;