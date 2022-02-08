import { Navigation } from '../navigation/';
import * as Styled from './Header.styled.js';
import Hamburger from "../../../assets/icons/Hamburger.svg"

export const Header = () => {
    return (
        <Styled.Header>
            <Styled.Wrapper>
              <a href="#">team awesome</a>
             <Hamburger />
          </Styled.Wrapper>
        <Navigation />
      </Styled.Header>
    );
  }