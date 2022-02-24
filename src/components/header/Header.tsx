import React, { useState } from "react";

import * as Styled from "./Header.styled";

import { Navigation } from "../navigation/";

import Close from "../../../public/icons/close.svg";
import Hamburger from "../../../public/icons/hamburger.svg";
import Logo from "../../../public/img/humanoids-logo.svg";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Wrapper>
          <a href="#">team awesome</a>
          <button onClick={handleClick}>{isActive ? <Close /> : <Hamburger />}</button>
        </Styled.Wrapper>
        <Navigation {...{ isActive }} />

        <Styled.UserContainer>
          <Styled.UserButton>
            <Logo />
            <img src="/img/amijs.jpg" />
          </Styled.UserButton>
          <Styled.ArrowDown />
        </Styled.UserContainer>
      </Styled.Container>
    </Styled.Header>
  );
};
