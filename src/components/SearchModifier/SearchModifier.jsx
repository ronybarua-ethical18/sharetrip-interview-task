import { Grid } from "@material-ui/core";
import React from "react";
import {
  ModifierContainer,
  FirstItem,
  SecondItem,
  ThirdItem,
  FourthItem,
  BusSchedule,
  ArrowOne,
  FlipBusIcon,
  ModifyButton,
  FirstTitle,
  ThirdTitle
} from "./SearchModifierStyles";
import busIcon from "../../assets/busOne.png";
import arrowOne from "../../assets/arrowOne.png";
import arrowTwo from "../../assets/arrowTwo.png";
const SearchModifier = () => {
  return (
    <ModifierContainer>
      <Grid container>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <FirstItem>
            <img src={busIcon} alt="spin" />
            <BusSchedule>
              <h5>Onward Journey</h5>
              <h3>Dhaka - Chottogram</h3>
              <FirstTitle>22 June 2021(Tuesday)</FirstTitle>
            </BusSchedule>
          </FirstItem>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <SecondItem><ArrowOne src={arrowOne} alt="arrowIcon"/>
          <img src={arrowTwo} alt="arrowIcon"/>
          </SecondItem>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <ThirdItem>
          <FlipBusIcon src={busIcon} alt="spin" />
            <BusSchedule>
              <h5>Return Journey</h5>
              <h3>Chottogram - Dhaka</h3>
              <ThirdTitle>24 June 2021(Tuesday)</ThirdTitle>
            </BusSchedule>
          </ThirdItem>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <FourthItem>
              <ModifyButton>
                MODIFIY SEARCH
              </ModifyButton>
          </FourthItem>
        </Grid>
      </Grid>
    </ModifierContainer>
  );
};

export default SearchModifier;
