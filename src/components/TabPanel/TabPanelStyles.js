import styled from "styled-components";

export const TabPanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f6f6f6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  margin-top: 10px;
`;

export const SinglePanel = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  padding: 4px 16px;
  justify-content: flex-start;
  cursor: pointer;

  /* &:hover {
    background: #3884f7;
    color: white;
    transition: 0.3s ease-in-out;
  } */
`;

export const PanelIcon = styled.img`
  margin-right: 10px;
`;
export const SecondPanel = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  padding: 4px 16px;
  justify-content: flex-start;
  cursor: pointer;
  background: #3884f7;
  color: white;
  transition: 0.3s ease-in-out;
`;

export const PanelTitle = styled.h5`
  color: #000;
  opacity:1;
`;

export const SecondTitle = styled.h5`
  color: #fff;
  opacity:1;
`;
