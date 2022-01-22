import Button from "@mui/material/Button";
import netPresentValue from "./netPresentValue";
import Typography from "@mui/material/Typography";
const { irr } = require('node-irr')

export default function internalRateOfReturn(data) {

    let rawIRRPercentage = irr(data)*100
    let finalPercentage = ""
    console.log(rawIRRPercentage)
    console.log(isNaN(rawIRRPercentage))

    switch (isNaN(rawIRRPercentage)) {

        case true:
            finalPercentage = "0"
            break;
        case false:
            finalPercentage = rawIRRPercentage.toFixed(2)
    }
    return finalPercentage
}