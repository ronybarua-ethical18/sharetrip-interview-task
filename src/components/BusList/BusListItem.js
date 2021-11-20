import styled from "styled-components";

export const BusListContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #f6f6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
export const RightSide = styled.div`
  background: #e5f2fe;
  padding: 0 16px;
  height: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const CurrencyTitle = styled.h1`
  color: #235fd8;
`;
export const CurrencySubTitle = styled.h4`
  color: #1882ff;
`;
export const SeatButton = styled.button`
  padding: 8px 16px;
  background: #1882ff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  color: white;
  font-size:14px;
  font-weight:500;
  margin:16px 0px;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const LeftSide = styled.div`
  padding: 16px 24px 32px 24px;
  height: 100%;
`;
export const Topbar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
 
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap:wrap;
    }
`;
export const IconTitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin: 5px 0px;
  text-align: center;
  color: #ef7e46;
`;

export const IconSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BusIcon = styled.img`
  margin: 0px 15px;
`;
export const BottomPart = styled.div`
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  margin: 8px 0px;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const MiddleItem = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
      margin: 20px 0px;
    }
`;
