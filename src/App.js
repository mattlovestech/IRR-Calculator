import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputField from "./components/Input";
import CalculateButton from "./components/CalculateButton";
import React from "react";


function App() {
  return (

    <div className="App">



      <header className="App-header">
          <CalculateButton/>
          <div style={{padding: "40px"}}>
      <Typography variant={"h3"} color="text.white" gutterBottom>
        <b>I</b>nternal <b>R</b>ate of <b>R</b>eturn <small>Calculator</small>
      </Typography>
          <hr/>
                <InputField/>
                <InputField/>
                <InputField/>
              <Typography variant={"h4"}  color="text.white">
                  Wait....what is Internal Rate of Return?
              </Typography>

              <br/>
              <hr/>
              <Button variant="outlined" > <Typography variant={"h6"}  color="text.white">
                  Learn more
              </Typography></Button>
              <br/>

              <Typography  sx={{ fontSize: 15 }} color="text.grey">
                  The IRR helps managers determine which potential projects add value and are worth undertaking. The advantage of expressing project values as a rate is the clear hurdle it provides. As long as the financing cost is less than the rate of potential return, the project adds value.
              </Typography>

          </div>

      </header>
    </div>
  );
}

export default App;
