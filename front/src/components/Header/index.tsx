import { StyledHeader } from "./style";
import Container from "../container";
import eflogo from "./eflogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={eflogo} alt="EFLogo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Cadastrar</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Container>
    </StyledHeader>
  );
};

export default Header;
