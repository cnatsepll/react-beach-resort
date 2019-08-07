// we dont need to import react here since we only
// need to access styled components
import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
// writing js inside the backticks
// importing the header styled component 
// from the styled components library
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
