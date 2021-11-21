import React, { useState } from "react";
import {
  NavigationContainer,
  Icon,
  CloseIcon,
  MobileNavWrapper,
  MobileNavMenu,
  MobileNavLink,
  MobileSpin,
  SpinTitle,
  SpinWrap
} from "./MobileNavStyles";
import spin from "../../assets/spin.png";
import switchIcon from "../../assets/switchIcon.png";
import ReactSwitch from "react-switch";
const MobileNavigation = ({ isOpen, toggle }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
  return (
    <NavigationContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink to="/flight" className="item">
            Flight
          </MobileNavLink>
          <MobileNavLink to="/" className="item">
            Bus
          </MobileNavLink>
          <MobileNavLink to="/hotel" className="item">
            Hotel
          </MobileNavLink>
          <MobileNavLink to="/visa" className="item">
            Visa
          </MobileNavLink>
          <MobileNavLink to="/visacard" className="item">
            Visa card
          </MobileNavLink>
          <MobileNavLink to="/holiday" className="item">
            Holiday
          </MobileNavLink>
          <MobileNavLink to="/group" className="item">
            Group Request
          </MobileNavLink>
          <MobileNavLink to="/travel" className="item">
            Travel Advisory
          </MobileNavLink>
          <MobileNavLink to="/promotions" className="item">
            Promotions
          </MobileNavLink>
          <MobileNavLink to="/blog" className="item">
            Blog
          </MobileNavLink>
        </MobileNavMenu>
      </MobileNavWrapper>
      <MobileSpin>
        <SpinWrap>
            <img src={spin} alt="spin" />
            <SpinTitle>Spin to win</SpinTitle>
            <ReactSwitch
              onChange={handleChange}
              uncheckedIcon={
                <img src={switchIcon} alt="switchIcon" className="switchIcon"></img>
              }
              checked={checked}
            />
        </SpinWrap>
      </MobileSpin>
    </NavigationContainer>
  );
};

export default MobileNavigation;
