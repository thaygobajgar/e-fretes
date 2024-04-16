import { StyledButton } from "../../styles/buttons";
import { MdSearch, MdNotifications } from "react-icons/md";
import { StyledHeader, StyledHeaderForm } from "./style";
import Container from "../container";
import { StyledText } from "../../styles/typography";
import { VscAccount } from "react-icons/vsc";
import { StyledTextInput } from "../../styles/input";
import { useState } from "react";
import Loader from "../Loader";
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
