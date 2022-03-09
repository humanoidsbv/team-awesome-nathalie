import React, { useState } from "react";
import Link from "next/link";

import * as Styled from "./Header.styled";

import { Navigation } from "../navigation/Navigation";

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
          <Link href="/">team awesome</Link>
          <button onClick={handleClick} type="button">
            {isActive ? <Close /> : <Hamburger />}
          </button>
        </Styled.Wrapper>
        <Navigation {...{ isActive }} />

        <Styled.UserContainer>
          <Styled.UserButton>
            <Logo />
            <img src="/img/amijs.jpg" alt="user" />
          </Styled.UserButton>
          <Styled.ArrowDown />
        </Styled.UserContainer>
      </Styled.Container>
    </Styled.Header>
  );
};
