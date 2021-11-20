import React, { useState } from "react";
import "./NavigationBar.css";
import brand from "../../assets/Full.png";
import spin from "../../assets/spin.png";
import switchIcon from "../../assets/switchIcon.png";
import { Nav, BrandLogo, NavLink, Bars, NavMenu, Spin, NavItemsWrapper, SpinTitle } from "./NavItems";
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
            <NavLink to="/flight" className="item">
              Flight
            </NavLink>
            <NavLink to="/" className="item">
              Bus
            </NavLink>
            <NavLink to="/hotel" className="item">
              Hotel
            </NavLink>
            <NavLink to="/visa" className="item">
              Visa
            </NavLink>
            <NavLink to="/visacard" className="item">
              Visa card
            </NavLink>
            <NavLink to="/holiday" className="item">
              Holiday
            </NavLink>
            <NavLink to="/group" className="item">
              Group Request
            </NavLink>
            <NavLink to="/travel" className="item">
              Travel Advisory
            </NavLink>
            <NavLink to="/promotions" className="item">
              Promotions
            </NavLink>
            <NavLink to="/blog" className="item">
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
                ></img>
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
