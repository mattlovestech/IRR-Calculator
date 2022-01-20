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
            <CssBaseline />
            <Container maxWidth="md">


        <Box sx={{ width: '100%', backgroundColor: "silver"}}>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs className={"oswald"} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{fontFamily: 'Oswald', backgroundColor: "green", color: "black"}} label="IRR Calculator" {...a11yProps(0)} />
                    <Tab  style={{fontFamily: 'Oswald'}} label="NPV Calculator" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <IRRCalculator/>
                <hr/>
                <Button className={"oswald"} variant="outlined" > <Typography variant={"h6"}  color="text.white">
                    Learn more
                </Typography></Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <a className="oswald">NPV Calculator</a>
            </TabPanel>

        </Box>

            </Container>
        </React.Fragment>
    );
}