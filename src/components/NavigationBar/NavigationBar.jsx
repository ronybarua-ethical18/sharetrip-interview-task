import React, { useState } from "react";
import brand from "../../assets/Full.png";
import spin from "../../assets/spin.png";
import switchIcon from "../../assets/switchIcon.png";
import { Nav, BrandLogo, NavLink, Bars, NavMenu, Spin, NavItemsWrapper, SpinTitle } from "./NavStyles";
import ReactSwitch from "react-switch";
const NavigationBar = ({ toggle }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Nav>
        <BrandLogo>
          <img src={brand} alt="brand-logo" />
        </BrandLogo>
        <Bars onClick={toggle}/>
        <NavItemsWrapper>
          <NavMenu>
            <NavLink to="/flight">
              Flight
            </NavLink>
            <NavLink to="/" >
              Bus
            </NavLink>
            <NavLink to="/hotel" >
              Hotel
            </NavLink>
            <NavLink to="/visa">
              Visa
            </NavLink>
            <NavLink to="/visacard">
              Visa card
            </NavLink>
            <NavLink to="/holiday" >
              Holiday
            </NavLink>
            <NavLink to="/group">
              Group Request
            </NavLink>
            <NavLink to="/travel">
              Travel Advisory
            </NavLink>
            <NavLink to="/promotions">
              Promotions
            </NavLink>
            <NavLink to="/blog" >
              Blog
            </NavLink>
          </NavMenu>
          <Spin>
            <img src={spin} alt="spin" />
            <SpinTitle>Spin to win</SpinTitle>
            <ReactSwitch
              onChange={handleChange}
              uncheckedIcon={
                <img
                  src={switchIcon}
                  alt="switchIcon"
                  className="switchIcon"
                />
              }
              checked={checked}
            />
          </Spin>
        </NavItemsWrapper>
      </Nav>
    </>
  );
};

export default NavigationBar;
