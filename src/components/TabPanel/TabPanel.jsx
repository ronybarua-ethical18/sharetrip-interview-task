import { Grid } from "@material-ui/core";
import React from "react";
import { TabPanelContainer, SinglePanel, PanelIcon, SecondPanel, PanelTitle, SecondTitle } from "./TabPanelStyles";
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
              <PanelTitle>Earliest Buses</PanelTitle>
          </SinglePanel>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SecondPanel>
          <PanelIcon src={coinIcon} alt="diamondIcon"/>
              <SecondTitle>Cheapest Buses</SecondTitle>
          </SecondPanel>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SinglePanel>
          <PanelIcon src={electric} alt="diamondIcon"/>
              <PanelTitle>Available Seats</PanelTitle>
          </SinglePanel>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SinglePanel>
          <PanelIcon src={electric} alt="diamondIcon"/>
              <PanelTitle>Fastest Trips</PanelTitle>
          </SinglePanel>
        </Grid>
      </Grid>
    </TabPanelContainer>
  );
};

export default TabPanel;
