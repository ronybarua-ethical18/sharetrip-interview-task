import { Grid } from "@material-ui/core";
import React from "react";
import coins from "../../assets/coins.png";
import dotArrowOne from "../../assets/dotArrowLeft.png";
import dotArrowTwo from "../../assets/dotArrowRight.png";
import coloredBus from "../../assets/busBlue.png";
import {
  BusListContainer,
  LeftSide,
  RightSide,
  Topbar,
  BottomPart,
  Title,
  IconSet,
  BusIcon,
  IconTitle,
  MiddleItem,
  CurrencyTitle,
  CurrencySubTitle,
  SeatButton,
} from "./BusListStyles";
const BusList = () => {
  return (
    <BusListContainer>
      <Grid container>
        <Grid item md={9} xs={12} sm={12}>
          <LeftSide>
            <Topbar>
              <h4>AC</h4>
              <div>
                <h4>Hanif Enterprise</h4>
                <small>31-DHK-CTG(D)</small>
              </div>
              <img src={coins} alt="coin" />
            </Topbar>
            <BottomPart>
              <div>
                <small>From</small>
                <Title>
                  DHAKA <strong> 11:30AM</strong>
                </Title>
                <h5>Kulgaon Counter</h5>
                <h6>22 June 2021</h6>
              </div>
              <MiddleItem>
                <IconSet>
                  <img src={dotArrowOne} alt="dotArrow" />
                  <BusIcon src={coloredBus} alt="coloredBus" />
                  <img src={dotArrowTwo} alt="dotArrowTwo" />
                </IconSet>
                <IconTitle>16 Seats available</IconTitle>
                <h6>6h 00m </h6>
              </MiddleItem>
              <div>
                <small>To</small>
                <Title>
                  Chattogram <strong> 5:30AM</strong>
                </Title>
                <h5>Dampara Counter</h5>
                <h6>23 June 2021</h6>
              </div>
            </BottomPart>
          </LeftSide>
        </Grid>
        <Grid item md={3} xs={12} sm={12}>
          <RightSide>
            <div>
              <small>Per Person</small>
              <CurrencyTitle>BDT 750</CurrencyTitle>
              <CurrencySubTitle>BDT 775</CurrencySubTitle>
              <SeatButton>VIEW STATS</SeatButton>
            </div>
          </RightSide>
        </Grid>
      </Grid>
    </BusListContainer>
  );
};

export default BusList;
