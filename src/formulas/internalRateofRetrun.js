import Button from "@mui/material/Button";
import netPresentValue from "./netPresentValue";
import Typography from "@mui/material/Typography";
const { irr } = require('node-irr')

export default function internalRateOfReturn(data) {
    const rawIRRPercentage = irr(data)
    let finalPercentage = ""
    console.log(rawIRRPercentage)
    console.log(isNaN(rawIRRPercentage))
    switch (isNaN(rawIRRPercentage)) {

        case true:
            finalPercentage = "0"
            break;
        case false:
            finalPercentage = Math.round(rawIRRPercentage*100)
    }
    return finalPercentage
}