
import {Input} from "@mui/material";

import React from "react";
import TextField from "@mui/material/TextField";
export default function IrrInput(props) {
   return(      <TextField style={{color: "red"}} id={props.id} value={props.value} onChange={props.onChange} label={props.label} color="secondary" variant="standard" />
   // <Input style={{fontSize: "20px", paddingTop: "10px", fontFamily: "oswald", color: "white !important"}}  type={"number"} id={props.id} value={props.value} onChange={props.onChange}  />
   )
}
