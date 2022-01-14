import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

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
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
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
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="IRR Calculator" {...a11yProps(0)} />
                    <Tab label="NPV Calculator" {...a11yProps(1)} />
                    <Tab label="Learn More" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                IRR Calculator
            </TabPanel>
            <TabPanel value={value} index={1}>
                NPV Calculator
            </TabPanel>
            <TabPanel value={value} index={2}>
                Learn More
            </TabPanel>
        </Box>

            </Container>
        </React.Fragment>
    );
}