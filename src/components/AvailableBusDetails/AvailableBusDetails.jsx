import { Grid } from '@material-ui/core';
import React from 'react';
import AvailableBusCarousel from '../AvailableBusCarousel/AvailableBusCarousel';
import BusList from '../BusList/BusList';
import TabPanel from '../TabPanel/TabPanel';
import { BusDetailsContainer, LeftPanel, RightPanel} from './AvailableBusDetailsItems';
const AvailableBusDetails = () => {
    return (
        <BusDetailsContainer>
            <Grid container>
                <Grid item md={3} xs={12} sm={12}>
                    <LeftPanel />
                </Grid>
                <Grid item md={9} xs={12} sm={12}>
                   <RightPanel>
                    <h4>48 Available Buses</h4>
                    <AvailableBusCarousel />
                    <TabPanel />
                    <BusList />
                   </RightPanel>
                </Grid>
            </Grid>
        </BusDetailsContainer>
    );
};

export default AvailableBusDetails;