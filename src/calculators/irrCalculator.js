import React, {Component} from "react";
import {Input} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CalculateButton from "../components/CalculateButton";

export default class IRRCalculator extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange = () => {

    }

    render() {
        return(

            <form onSubmit={this.handleSubmit}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Initial Investment</InputLabel>
                    <Input id="component-simple" value={"name"} onChange={this.handleInputChange} />
                </FormControl>
            </form>

            )
    }
}