import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import netPresentValue from "../formulas/netPresentValue";
import internalRateOfReturnfRetrun from "../formulas/internalRateofRetrun";
import internalRateOfReturn from "../formulas/internalRateofRetrun";
export default function CalculateButton() {
    return(<>
            <Button onClick={() => internalRateOfReturn([-500000,210000,237000,265000])} > <Typography variant={"h6"}  color="primary">
                Calculate IRR
            </Typography></Button>

            <Button onClick={() => netPresentValue(1.06,{0: -500000, 1: 210000, 2: 237000, 3: 265000})} > <Typography variant={"h6"}  color="primary">
                Calculate NPV
            </Typography></Button>
        </>

    )
}