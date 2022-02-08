import React, { useState } from 'react';
import { Navigation } from '../navigation/';
import * as Styled from './Header.styled.js';
import Hamburger from "../../../assets/icons/Hamburger.svg"

export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive(!isActive);
    return (
        <Styled.Header>
            <Styled.Wrapper>
              <a href="#">team awesome</a>
             <Hamburger onClick={handleClick}/>
          </Styled.Wrapper>
          {isActive && (
        <Navigation />)}
      </Styled.Header>
    );
  }