import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Alert from "@mui/material/Alert";

export default function WhatIsIRR() {
    return(<>
            <br/>
            <div style={{fontFamily: 'oswald' ,
                fontSize: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                color: "black",
                opacity: ".8"
            }}>
                <p><strong>Learn about Internal Rate of Return</strong> <br/> Internal Rate of Return, it is an important data point
                when making investment decisions</p>

            <h4>TL:DR - just watch this video I made👇🏿</h4>
            <div style={{textAlign: "center"}}>
                <iframe width={"100%"} height={"250px"} src="https://www.youtube.com/embed/aSnPIfBjlHc" />
            </div>
            </div>
        </>

    )
}