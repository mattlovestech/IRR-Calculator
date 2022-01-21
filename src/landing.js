import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IRRCalculator from "./calculators/irrCalculator";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                   {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (



            <React.Fragment>
        <Box>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs className={"oswald"} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{fontFamily: 'Oswald', fontSize: "18px", backgroundColor: "black", color: "#EB9486"}} label="IRR Calculator 📈" {...a11yProps(0)} />
                    <Tab  style={{fontFamily: 'Oswald', fontSize: "18px", color: "#E5F6FD", backgroundColor: "#014361"}} label="What is IRR? 👀" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <br/>
                <p style={{fontFamily: 'oswald' ,fontSize: "20px", paddingLeft: "20px", paddingRight: "20px", color: "white"}}><strong>How it Works</strong> <br/> Add your data
                    for each year & instantly calculate see the IRR calculated</p>
                <IRRCalculator/>
                <br/>
                <Alert severity="info" style={{opacity: ".85", backgroundColor: "red !important"}}>
                    <AlertTitle>Wait...<strong>what is IRR? 👀</strong></AlertTitle>
                    IRR stands for Internal Rate of Return, it is an important data point
                   when making investment decisions
                    <hr/>
                    <Button style={{backgroundColor: "#014361", color: "#E5F6FD"}} variant={"outlined"}>Learn More</Button>
                </Alert>


            </TabPanel>
            <TabPanel value={value} index={1}>
                <Alert severity="info" style={{backgroundColor: "transparent !important"}}>
                    <AlertTitle>Wait...<strong>what is IRR? 👀</strong></AlertTitle>
                    IRR stands for Internal Rate of Return, it is an important data point
                    when making investment decisions
                </Alert>
            </TabPanel>

        </Box>    </React.Fragment>



    );
}