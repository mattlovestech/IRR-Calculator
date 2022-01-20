import Button from "@mui/material/Button";
import netPresentValue from "./netPresentValue";
import Typography from "@mui/material/Typography";
const { irr } = require('node-irr')

export default function internalRateOfReturn(data) {

    const rawIRRPercentage = irr(data)

    return (Math.round(rawIRRPercentage).toFixed(3))

}