import React, {Component} from "react";
import {Input} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import internalRateOfReturn from "../formulas/internalRateofRetrun";
import TextField from "@mui/material/TextField";



export default class IRRCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
                initial: '',
                year1: '',
                year2: '',
                year3: '',
                year4: '',
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return(

    <>
            <form onSubmit={this.handleSubmit}>

                <FormControl  variant="standard">
                    <InputLabel htmlFor="component-simple">Initial Investment</InputLabel>
                    <Input style={{padding: "5px"}} required={true} type={"number"} id="initial" value={this.state.initial} onChange={this.handleInputChange} />
                </FormControl>
                <br/>
                <FormControl variant="standard">
                    <InputLabel  htmlFor="component-simple">Year 1</InputLabel>
                    <Input style={{padding: "5px"}} type={"number"} id="year1" value={this.state.year1}  onChange={this.handleInputChange}  />
                </FormControl>
                <br/>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Year 2</InputLabel>
                    <Input style={{padding: "5px"}}   type={"number"} id="year2" value={this.state.year2} onChange={this.handleInputChange} />
                </FormControl>
                <br/>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Year 3</InputLabel>
                    <Input style={{padding: "5px"}}   type={"number"} id="year3" value={this.state.year3} onChange={this.handleInputChange} />
                </FormControl>
                <br/>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Year 4</InputLabel>
                    <Input style={{padding: "10px"}}  type={"number"}/>
                </FormControl>




            </form>
           <h1>IRR {internalRateOfReturn([this.state.initial,this.state.year1,this.state.year2, this.state.year3, this.state.year4])}%</h1>

    </>

            )
    }
}