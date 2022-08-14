import { utilities } from "../utilities/defaults";
import Square from "./Square";

const UtilitiesBar = (props: any) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {
        Object.keys(utilities).map((utility, key) => {
          return (
            <Square key={key} 
              selectedUtility={props.selectedUtility} 
              setSelectedUtility={props.setSelectedUtility} 
              canvas={props.canvas}
              refreshCanvas={props.refreshCanvas}
              border={true}
              icon={utility} 
              direction='column'
            />
          )} 
        )
      }
    </div>
  );
}

export default UtilitiesBar;