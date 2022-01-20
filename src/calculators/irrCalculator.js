import React, {Component} from "react";
import {Input} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CalculateButton from "../components/CalculateButton";

export default class IRRCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.value)
        console.log(event.target.id)
    }

    render() {
        return(

            <form onSubmit={this.handleSubmit}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Initial Investment</InputLabel>
                    <Input id="initial" value={"-0"} onChange={this.handleInputChange} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Year 1</InputLabel>
                    <Input id="year-1" value={"0"} onChange={this.handleInputChange} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Year 2</InputLabel>
                    <Input id="year-2" value={"0"} onChange={this.handleInputChange} />
                </FormControl>
            </form>

            )
    }
}