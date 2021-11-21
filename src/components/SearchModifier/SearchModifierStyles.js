import styled  from 'styled-components'

export const ModifierContainer = styled.div`
background-color:#3062d0;
height:auto;
padding: 10px 8% 10px 8%;
color:white;
`

export const FirstItem = styled.div`
background-color: rgba(255, 255, 255, 0.1);
padding: 12px 18px;
height:86px;
border-radius:6px;
color:white;
display:flex;
align-items: center;

@media screen and (max-width:1130px){
    margin-bottom:12px;
}
`
export const FirstTitle = styled.h6`
color:white;
margin:2px 0px;
`

export const SecondItem = styled.div`
padding: 12px 20px;
height:86px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
export const ThirdItem = styled.div`
background-color: rgba(255, 255, 255, 0.1);
padding: 12px 18px;
display: flex;
align-items:center;
opacity:0.7;
height:86px;
border-radius:6px;
`
export const ThirdTitle = styled.h6`
color:#fff;
opacity:0.7;
`
export const FourthItem = styled.div`
height:86px;
display:flex;
padding: 12px 20px;
align-items: center;
justify-content:flex-end;
border-radius:6px;

@media screen and (max-width:1130px){
    justify-content: center;
}
`
export const BusSchedule = styled.div`
color:white;
margin-left:15px;
`
export const ArrowOne = styled.img`
margin-bottom: 10px;
`

export const FlipBusIcon = styled.img`
transform: scaleX(-1);
`

export const ModifyButton = styled.button`
background: #1882FF;
padding:12px 20px;
border-radius:3px;
color:white;
border:none;
outline:none;
cursor:pointer;
`