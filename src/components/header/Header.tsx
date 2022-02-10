import React, { useState } from "react";
import { Navigation } from "../navigation/";
import * as Styled from "./Header.styled";
import Hamburger from "../../../public/icons/hamburger.svg";
import Close from "../../../public/icons/close.svg";
import Logo from "../../../public/img/humanoids-logo.svg";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  const icon = isActive ? <Close /> : <Hamburger />;

  return (
    <Styled.Header>
      <Styled.Wrapper>
        <a href="#">team awesome</a>
        <button onClick={handleClick}>{icon}</button>
      </Styled.Wrapper>
      <Navigation isActive={isActive} />

      <Styled.UserContainer>
        <Styled.UserButton>
          <Logo />
          <img src="/img/amijs.jpg" />
        </Styled.UserButton>
        <Styled.ArrowDown />
      </Styled.UserContainer>
    </Styled.Header>
  );
};
