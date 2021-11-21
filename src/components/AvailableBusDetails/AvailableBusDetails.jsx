import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AvailableBusCarousel from "../AvailableBusCarousel/AvailableBusCarousel";
import BusList from "../BusList/BusList";
import TabPanel from "../TabPanel/TabPanel";
import {
  BusDetailsContainer,
  LeftPanel,
  RightPanel,
} from "./AvailableBusDetailsStyles";
const AvailableBusDetails = () => {

  const useStyles = makeStyles((theme) => ({
  item1: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
    
  },
}));

const classes = useStyles();

  return (
    <BusDetailsContainer>
      <Grid container>
        <Grid item md={3} xs={12} sm={12} className={classes.item2}>
          <LeftPanel />
        </Grid>
        <Grid item md={9} xs={12} sm={12} className={classes.item1}>
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
