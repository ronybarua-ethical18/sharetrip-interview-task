import styled from "styled-components";

export const BusDetailsContainer = styled.div`
  height: auto;
  padding: 20px 8% 20px 8%;
  color: black;
`;
export const LeftPanel = styled.div`
  height: 100vh;
  background: #c4c4c4;
  opacity: 0.2;
  border: 1px solid #f6f6f6;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
`;

export const RightPanel = styled.div`
  background: #fff;
  color: #000;
  padding: 12px 20px;

  @media screen and (max-width:960px){
    padding: 12px 0px;
  }
`;
