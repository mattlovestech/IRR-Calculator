import React, {Component} from "react";
import {Input} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import internalRateOfReturn from "../formulas/internalRateofRetrun";

import IrrInput from "../components/IrrInput";
import {CssTextField} from "../components/inputStyles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";




export default class IRRCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: '',
            year1: '',

                points: 5,
                yearsArray: {
                    year2: '',
                    year3: '',
                    year4: '',
                },
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    handleInputChange = (event) => {
        switch (event.target.id) {
            case "initial":
            case "year1":
                console.log("do nothing")
                this.setState({
                    [event.target.id]: event.target.value
                })
                break;

            default:
                this.setState(prevState => {
                    let yearsArray = Object.assign({}, prevState.yearsArray);  // creating copy of state variable
                    const id = event.target.id

                    yearsArray[id] = event.target.value;                     // update the name property, assign a new value
                    return { yearsArray };                                 // return new object to state
                })
        }

    }

    addYear() {
        this.setState(prevState => {
            let yearsArray = Object.assign({}, prevState.yearsArray);  // creating copy of state variable
            const id = "year" + ((Object.keys(this.state.yearsArray).length) + 2)

            yearsArray[id] = '';                     // update the name property, assign a new value
            return { yearsArray };                                 // return new object to state
        })
    }
    removeYear() {

        let yearsArray = this.state.yearsArray;
        console.log(yearsArray)
        const id = "year" + ((Object.keys(this.state.yearsArray).length) + 1)
        delete yearsArray[id];
        console.log(id)
        console.log(yearsArray[id])
        console.log(yearsArray)
        this.setState(yearsArray);
        console.log("state", this.state.yearsArray)
    }

    renderInputs(numberOfInputs) {

    }


    render() {

        return(

    <>

            <form onSubmit={this.handleSubmit} style={{"textAlign": "center",background: "#EB9486", padding: "10px 0px 30px 0px"}}>


                    {/*<InputLabel htmlFor="component-simple">Initial Investment</InputLabel>*/}
                    <IrrInput label="Initial Investment" id="initial" value={this.state.initial} onChange={this.handleInputChange} />


                    {/*<InputLabel  htmlFor="component-simple">Year 1</InputLabel>*/}
                    <IrrInput label="Year 1" id="year1" value={this.state.year1}  onChange={this.handleInputChange}  />

                {Array.from(Array(Object.keys(this.state.yearsArray).length)).map((x, index) => <><IrrInput value={this.state.yearsArray["year" + (index + 2)]} onChange={this.handleInputChange} id={"year" + (index + 2)} label={"Year " + (index + 2) + " Cash Flow" } key={index} /></>)}

                <Button style={{marginLeft: "5px"}} onClick={() => this.addYear()} color="success" variant="contained">Add</Button>
                <Button style={{marginLeft: "5px"}}  onClick={() => this.removeYear()} color="error" variant="contained">Remove</Button>




            </form>
           <h1 style={{"textAlign": "center",fontFamily: 'oswald', fontSize: "40px", color: "white"}} >IRR {internalRateOfReturn([-this.state.initial,this.state.year1].concat(Object.values(this.state.yearsArray)))}%</h1>



    </>

            )
    }
}
