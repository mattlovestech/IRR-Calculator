import React, {Component} from "react";
import {Input} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import internalRateOfReturn from "../formulas/internalRateofRetrun";

import IrrInput from "../components/IrrInput";



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
        //event.preventDefault()
        console.log("change")
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return(

    <>
            <form onSubmit={this.handleSubmit} style={{"textAlign": "center", backgroundColor: "#EB9486", opacity: ".8", padding: "10px 0px 30px 0px"}}>


                    {/*<InputLabel htmlFor="component-simple">Initial Investment</InputLabel>*/}
                    <IrrInput label="Initial Investment" id="initial" value={this.state.initial} onChange={this.handleInputChange} />

                <br/>

                    {/*<InputLabel  htmlFor="component-simple">Year 1</InputLabel>*/}
                    <IrrInput label="Year 1" id="year1" value={this.state.year1}  onChange={this.handleInputChange}  />

                <br/>

                    {/*<InputLabel htmlFor="component-simple">Year 2</InputLabel>*/}
                    <IrrInput label="Year 2"  id="year2" value={this.state.year2} onChange={this.handleInputChange} />

                <br/>

                    {/*<InputLabel htmlFor="component-simple">Year 3</InputLabel>*/}
                    <IrrInput label="Year 3"   id="year3" value={this.state.year3} onChange={this.handleInputChange} />

                <br/>


                    {/*<InputLabel htmlFor="component-simple">Year 4</InputLabel>*/}
                    <IrrInput label="Year 4" id="year4" value={this.state.year4} onChange={this.handleInputChange}/>


            </form>
           <h1 style={{"textAlign": "center",fontFamily: 'oswald', fontSize: "40px", color: "white"}} >IRR {internalRateOfReturn([-this.state.initial,this.state.year1,this.state.year2, this.state.year3, this.state.year4])}%</h1>



    </>

            )
    }
}