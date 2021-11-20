import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.aside`
  position: fixed;
  z-index: 999;
  background-color: #3062d0;
  color: white;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileNavWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MobileNavMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 0;
  grid-template-rows: repeat(10 70px);
  text-align: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(10, 40px);
  }
`;
export const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #3062d0;
    transition: 0.3s ease-in-out;
  }
`;
export const MobileSpin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SpinWrap = styled.div`
  padding: 10px 20px;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  border-radius: 25px;
`;

export const SpinTitle = styled.h5`
  margin: 0 10px;
`;
