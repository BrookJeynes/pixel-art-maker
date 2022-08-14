import React, { useState } from 'react';
import "./App.css";

import Square from './components/Square';
import Canvas from './components/Canvas';
import DefaultColours from './components/DefaultColours';
import UtilitiesBar from './components/UtilitiesBar';

const App = () => {
  const [selectedColour, setSelectedColour] = useState('#000');
  const [selectedUtility, setSelectedUtility] = useState('Brush');

  const [canvas, setCanvas] = useState({
    height: 10,
    width: 10
  });  

  const [localCanvas, setLocalCanvas] = useState({
    height: `${canvas.height}`,
    width: `${canvas.width}`
  });

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Canvas 
          selectedColour={selectedColour} 
          selectedUtility={selectedUtility} 
          canvas={canvas}
        />

        <div style={{marginRight: 40}} />

        <div>
          <DefaultColours selectedColour={selectedColour} setSelectedColor={setSelectedColour} /> 

          <div style={{marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{marginRight: 10}}>
              Current Colour:
            </div>
            
            <Square colour={selectedColour} disabled={true} border={true} />

            <div style={{marginLeft: 10}}>
              <label>Custom Colour: 
                <input type="text" 
                  value={`${selectedColour}`} 
                  onChange={(e) => e.target.value === '' ? setSelectedColour('#') : setSelectedColour(e.target.value)} 
                />
              </label>
            </div>
          </div>

          <div style={{marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{marginRight: 10}}>
              Selected Tool: {selectedUtility}
            </div>
          </div>
        </div>

        <div>
          <UtilitiesBar 
            selectedUtility={selectedUtility} 
            setSelectedUtility={setSelectedUtility} 
            canvas={canvas}
            refreshCanvas={setCanvas}
          /> 
        </div>
      </div>

      <div style={{marginTop: 40}} />

      <div>
        <form onSubmit={(e) => {
          e.preventDefault();

          setCanvas({
            height: Number(localCanvas.height),
            width: Number(localCanvas.width)
          })}
        }>
          <label>Width: <input type="text" value={localCanvas.width} onChange={(e) => setLocalCanvas({height: localCanvas.height, width: e.target.value})} /></label>
          <label>Height: <input type="text" value={localCanvas.height} onChange={(e) => setLocalCanvas({height: e.target.value, width: localCanvas.width})} /></label>
          <input type="submit" value="Submit" />
        </form>
      </div>   
    </div>
  );
}

export default App;