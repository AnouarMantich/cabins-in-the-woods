import styled from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 16rem;
  width: auto;
`;

function Logo() {
  // const { isDarkMode } = useDarkMode();

  // const imageLogo = isDarkMode ? "logo-dark.png" : "logo-light.png";

  return (
    <StyledLogo>
      <Img src="./cabin-logo.png" alt="Logo" />
      <h3>cabins in the woods</h3>
    </StyledLogo>
  );
}

export default Logo;
