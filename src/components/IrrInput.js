
import {Input} from "@mui/material";

import React from "react";
export default function IrrInput(props) {
   return(<Input style={{fontSize: "20px", paddingTop: "10px", fontFamily: "oswald", color: "white !important"}}  type={"number"} id={props.id} value={props.value} onChange={props.onChange}  />)
}
