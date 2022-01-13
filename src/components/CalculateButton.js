import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import netPresentValue from "../formulas/netPresentValue";
export default function CalculateButton() {
   return(
       <Button onClick={netPresentValue()} > <Typography variant={"h6"}  color="primary">
           Calculate
       </Typography></Button>
   )
}
