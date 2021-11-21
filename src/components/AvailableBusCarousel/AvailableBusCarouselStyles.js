import styled from "styled-components";

export const BusCarouselContainer = styled.div`
  width: 100%;
  background: #ffffff;
  margin-top: 20px;
  border: 1px solid #f6f6f6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
`
export const CarouselItem = styled.div`
  width: 150px;
  height: 44px;
  padding: 6px 6px;
  border-left: 1px solid lightgray;

  @media screen and (max-width:768px){
    width:100%;
  }
`
export const CarouselTitle = styled.h5`
opacity:1;
` 
