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
  background: center/cover no-repeat url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
  `;
// in the above js we are using a ternary operator with props
// we are searching the styled component properties
// for a variable named img
// this is used on the SingleRoom page
// it's like a parameter

export default StyledHero;
