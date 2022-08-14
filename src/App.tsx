import React, { useState } from "react";
import "./App.css";

import { ChromePicker } from "react-color";

import Square from "./components/Square";
import Canvas from "./components/Canvas";
import DefaultColours from "./components/DefaultColours";
import UtilitiesBar from "./components/UtilitiesBar";

const App = () => {
  const [selectedColour, setSelectedColour] = useState("#000");
  const [selectedUtility, setSelectedUtility] = useState("Brush");
  const [showColourPicker, setShowColourPicker] = useState(false);

  const [canvas, setCanvas] = useState({
    height: 10,
    width: 10,
  });

  const [localCanvas, setLocalCanvas] = useState({
    height: `${canvas.height}`,
    width: `${canvas.width}`,
  });

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'start' }}>
          <Canvas
            selectedColour={selectedColour}
            selectedUtility={selectedUtility}
            canvas={canvas}
          />

          <DefaultColours
            selectedColour={selectedColour}
            setSelectedColor={setSelectedColour}
          />
        </div>

        <div style={{ marginRight: 20 }} />

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <div style={{ marginLeft: 10 }}>
              <UtilitiesBar
                selectedUtility={selectedUtility}
                setSelectedUtility={setSelectedUtility}
                canvas={canvas}
                refreshCanvas={setCanvas}
              />
            </div>

            <div
              style={{
                marginLeft: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Selected Tool: {selectedUtility}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <div style={{ marginRight: 10 }}>Current Colour:</div>

                <Square 
                  colour={selectedColour} 
                  disabled={true} 
                  border={true} 
                  direction='column'
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
              >
                <label>
                  Custom Colour:
                  <input
                    type="text"
                    value={`${selectedColour}`}
                    onChange={(e) =>
                      e.target.value === ""
                        ? setSelectedColour("#")
                        : setSelectedColour(e.target.value)
                    }
                    style={{ marginLeft: 10 }}
                  />
                </label>

                <button
                  onClick={() => setShowColourPicker(!showColourPicker)}
                  style={{ marginLeft: 10 }}
                >
                  Colour Picker
                </button>

                {showColourPicker && (
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <ChromePicker
                      color={selectedColour}
                      onChange={(e: any) => setSelectedColour(e.hex)}
                    />
                  </div>
                )}
              </div>

              <div style={{ marginTop: 40 }} />
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  setLocalCanvas({
                    height: (!localCanvas.height || localCanvas.height === "0") ? "1" : localCanvas.height,
                    width: (!localCanvas.width || localCanvas.width === "0") ? "1" : localCanvas.width,
                  }); 

                  setCanvas({
                    height: (!localCanvas.height || localCanvas.height === "0") ? 1 : Number(localCanvas.height),
                    width: (!localCanvas.width || localCanvas.width === "0") ? 1 : Number(localCanvas.width),
                  });
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <label>
                    Width:
                    <input
                      type="text"
                      value={localCanvas.width}
                      onChange={(e) =>
                        setLocalCanvas({
                          ...localCanvas,
                          width: e.target.value,
                        })
                      }
                      style={{ marginLeft: 10 }}
                    />
                  </label>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <label>Height: </label>
                    <input
                      type="text"
                      value={localCanvas.height}
                      onChange={(e) =>
                        setLocalCanvas({
                          ...localCanvas,
                          height: e.target.value,
                        })
                      }
                      style={{ marginLeft: 10 }}
                    />
                    <input
                      type="submit"
                      value="Submit"
                      style={{ marginLeft: 10 }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
