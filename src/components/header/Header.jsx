import React, { useState } from 'react';
import { Navigation } from '../navigation/';
import * as Styled from './Header.styled.js';
import Hamburger from "../../../assets/icons/hamburger.svg";
import Close from "../../../assets/icons/close.svg";
import ArrowDown from "../../../assets/icons/arrow_down.svg"
import Logo from "../../../assets/img/humanoids_logo.svg";

export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive(!isActive);
    const icon = isActive ? <Close /> : <Hamburger />;

    return (
        <Styled.Header>
            <Styled.Wrapper>
              <a href="#">team awesome</a>
             <button onClick={handleClick}>
             {icon}
             </button>
          </Styled.Wrapper>
          {isActive && (
            <Navigation />)}
            <Styled.NavDesktop>
            <Styled.NavButtonDesktop><Logo /></Styled.NavButtonDesktop>
            <ArrowDown />
            </Styled.NavDesktop>
      </Styled.Header>
    );
  }