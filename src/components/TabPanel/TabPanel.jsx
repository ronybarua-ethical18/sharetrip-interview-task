import { Grid } from "@material-ui/core";
import React from "react";
import { TabPanelContainer, SinglePanel, PanelIcon, SecondPanel } from "./TabPanelItems";
import diamondIcon from '../../assets/Icon.png'
import coinIcon from '../../assets/coin.png'
import electric from '../../assets/electric.png'
const TabPanel = () => {
  return (
    <TabPanelContainer>
      <Grid container>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SinglePanel>
              <PanelIcon src={diamondIcon} alt="diamondIcon"/>
              <h5>Earliest Buses</h5>
          </SinglePanel>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SecondPanel>
          <PanelIcon src={coinIcon} alt="diamondIcon"/>
              <h5>Cheapest Buses</h5>
          </SecondPanel>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SinglePanel>
          <PanelIcon src={electric} alt="diamondIcon"/>
              <h5>Available Seats</h5>
          </SinglePanel>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SinglePanel>
          <PanelIcon src={electric} alt="diamondIcon"/>
              <h5>Fastest Trips</h5>
          </SinglePanel>
        </Grid>
      </Grid>
    </TabPanelContainer>
  );
};

export default TabPanel;
