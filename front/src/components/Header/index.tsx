import { StyledHeader } from "./style";
import Container from "../container";
import eflogo from "./eflogo.png";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={eflogo} alt="EFLogo" />
      </Container>
    </StyledHeader>
  );
};

export default Header;
