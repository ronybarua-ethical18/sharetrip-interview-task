import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 96px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  z-index: 10;
`;

export const BrandLogo = styled.div`
  padding: 6px 48x 6px 0px;
  width: 226px;
  height: 68px;
`;
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;
  margin: 0px 8px;
  height: 36px;
  cursor: pointer;

  &.active {
    color: #3062D0;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: blue;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Spin = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItemsWrapper = styled.div`
display:flex;
align-items: center;
width:100vw;
white-space: nowrap;
justify-content: space-between;
`

export const SpinTitle = styled.h5`
margin: 0 10px;
`
