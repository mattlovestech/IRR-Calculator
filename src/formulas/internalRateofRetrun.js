import Button from "@mui/material/Button";
import netPresentValue from "./netPresentValue";
import Typography from "@mui/material/Typography";
const { irr } = require('node-irr')

export default function internalRateOfReturn(data) {
    const rawData = {0: -500000, 1: 210000, 2: 237000, 3: 265000}
    //const data = [-10, -10, 21]
    console.log(irr(data))

    // //  let initialInvestment = 500000
    // // let initial = (-(initialInvestment)/((1+discountRate)^0))
    // let sumOfYears = 0
    // // let myArray = {0: -500000, 1: 210000, 2: 237000, 3: 265000}
    //
    //
    // let npv = 1
    // let npvTwo = 0
    // let discount = 1
    // let discountRateOne = 1.5
    // let discountRateTwo = 1.25
    // let discountRateThree = 1.06
    // while (npv !== 0) {
    //     npv = netPresentValue(discount,{0: -500000, 1: 210000, 2: 237000, 3: 265000})
    //     if (npv > 0) {
    //        discount = discount - 0.01
    //     } else {
    //         discount = discount + 0.01
    //     }
    //     console.log("NPV:", npv, " discount", discount)
    //
    // }
    return (irr(data))

}