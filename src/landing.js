import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IRRCalculator from "./tabs/irrCalculator";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import WhatIsIRR from "./tabs/whatIsIrr";

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
    const tabsColor = {
        0: '#EB9486',
        1: '#ffffff',
    };


    return (



            <React.Fragment>
        <Box>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs TabIndicatorProps={{style: {background:tabsColor[value],outlineOffset: "-2px"}}} className={"oswald"} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{fontFamily: 'Oswald', fontSize: "20px", backgroundColor: "black", color: "#EB9486"}} label="IRR Calculator 📈" {...a11yProps(0)} />
                    <Tab  style={{fontFamily: 'Oswald', fontSize: "20px", color: "white", backgroundColor: "#EB9486"}} label="What is IRR? 👀" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <br/>
                <p style={{fontFamily: 'oswald' ,fontSize: "20px", paddingLeft: "20px", paddingRight: "20px", color: "white"}}><strong>How it Works</strong> <br/> Add your initial investment and estimated cash flow each period, then instantly see the IRR calculated</p>
                <IRRCalculator/>
                <br/>
                <div style={{opacity: ".85", backgroundColor: "#EB9486", padding: "20px", fontFamily: "oswald", fontSize: "20px"}}>
                    Wait...<strong>what is IRR? 👀</strong>
                    <br/>
                    IRR stands for Internal Rate of Return, it is an important data point
                    when making investment decisions
                   <br/>
                   <br/>
                    <Button onClick={() => setValue(1)} style={{backgroundColor: "#121212", color: "#EB9486"}} variant={"outlined"}>Learn More</Button>
                </div>


            </TabPanel>

            <TabPanel value={value} index={1} style={{backgroundColor: "#EB9486"}}>
                <WhatIsIRR/>
                <br/>

            </TabPanel>
            <div style={{textAlign: "center"}}>
              <p style={{color:"white", textAlign: "center"}}>
    Created with 💜  by 
    <strong>
        <a href="https://mattlovestech.com" rel="noopener noreferrer" target="_blank">@mattlovestech</a>
    </strong>
</p>

                <a  href="https://www.hitwebcounter.com" target="_blank">
                    <img src="https://hitwebcounter.com/counter/counter.php?page=7930314&style=0038&nbdigits=5&type=ip&initCount=0" title="IRR"   border="0"  alt="irr"/></a>

            </div>
      </Box>

            </React.Fragment>



    );
}
