import React, { useState, useRef } from "react";
import "./App.css";

import { ChromePicker } from "react-color";

import Square from "./components/Square";
import Canvas from "./components/Canvas";
import DefaultColours from "./components/DefaultColours";
import UtilitiesBar from "./components/UtilitiesBar";
import DownloadImage from "./components/DownloadImage";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const App = () => {
  const [selectedColour, setSelectedColour] = useState("#000");
  const [selectedUtility, setSelectedUtility] = useState("Brush");
  const [showColourPicker, setShowColourPicker] = useState(false);
  const [squareScale, setSquareScale] = useState(4);

  const ref = useRef<HTMLDivElement>(null);

  const [canvas, setCanvas] = useState({
    height: 10,
    width: 10,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const canvasHeight = e.target.elements.canvasHeight.value;
    const canvasWidth = e.target.elements.canvasWidth.value;
    const canvasScale = e.target.elements.canvasScale.value; 

    if (canvasScale === "" || Number(canvasScale) <= 0) {
      setSquareScale(4);
    } else {
      setSquareScale(Number(canvasScale));
    }

    try {
      if (Number(canvasHeight) > 0 && Number(canvasWidth) > 0) {
        setCanvas({
          height: Number(canvasHeight),
          width: Number(canvasWidth),
        });
      } else {
        setCanvas({
          height: 10,
          width: 10,
        });
      }
    } catch (error) {
      setCanvas({
        height: 10,
        width: 10
      });
    }   
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Card sx={{ marginTop: "10px", padding: 2, justifyContent: "center" }}>
            <div style={{ justifyContent: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                Selected Tool: {selectedUtility}
                <div style={{ marginLeft: 78 }} />
                <DownloadImage componentReference={ref} />
              </div>
            </div>
          </Card>
          
          <div style={{marginBottom: "10px"}}/>

          <div ref={ref}>
            <Canvas
              selectedColour={selectedColour}
              selectedUtility={selectedUtility}
              canvas={canvas}
              squareScale={squareScale}
            />
          </div>
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
              {/* Utilities Bar */}
              <UtilitiesBar
                selectedUtility={selectedUtility}
                setSelectedUtility={setSelectedUtility}
                canvas={canvas}
                refreshCanvas={setCanvas}
              />

              {/* Default colours Component */}
              <DefaultColours
                selectedColour={selectedColour}
                setSelectedColor={setSelectedColour}
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
              <Grid spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper>
                    {/*=====================================================================================*/}
                    {/*   TSX for the Canvas colour code */}
                    <Card sx={{ padding: 4.2 }}>
                      <Typography variant="h5" component="h2">
                        Canvas Colour Settings
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Edit each pixel of the canvas.
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 30,
                        }}
                      >
                        <div style={{ marginRight: 10 }}>Current Colour:</div>

                        <Square
                          colour={selectedColour}
                          disabled={true}
                          border={true}
                          direction="column"
                        />
                      </div>

                      <div>
                        <label>
                          {/* Custom Colour: */}
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
                      </div>
                      <Button
                        onClick={() => setShowColourPicker(!showColourPicker)}
                        variant="contained"
                      >
                        Colour Picker
                      </Button>

                      {showColourPicker && (
                        <div style={{ position: "absolute", zIndex: "2" }}>
                          <ChromePicker
                            color={selectedColour}
                            onChange={(e: any) => setSelectedColour(e.hex)}
                          />
                        </div>
                      )}
                    </Card>

                    {/*=====================================================================================*/}
                  </Paper>
                  <hr />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper>
                    {/*=====================================================================================*/}
                    {/* TSX code for the Canvas Settings */}
                    <Card sx={{ padding: 3.9 }}>
                      <form onSubmit={handleSubmit} >
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Canvas Settings
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Change the size of the canvas.
                          </Typography>
                        </CardContent>
                        <CardMedia>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ marginRight: 10 }}>Height</div>
                            <input
                              type="text"
                              name="canvasHeight"
                              placeholder={canvas.height.toString()}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ marginRight: 10 }}>Width</div>
                            <input
                              type="text"
                              name="canvasWidth"
                              placeholder={canvas.width.toString()}
                            />
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ marginRight: 10 }}>Scale</div>
                            <input
                              type="text"
                              name="canvasScale"
                              placeholder="4"
                            />
                          </div>

                          {/* make the update button */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Button type="submit" style={{ marginRight: 10 }}>
                              Update
                            </Button>
                          </div>
                        </CardMedia>
                      </form>
                    </Card>
                    {/*=====================================================================================*/}
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
