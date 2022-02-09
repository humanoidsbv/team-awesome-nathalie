import styled from 'styled-components';

export const Header = styled.header`
    background-color: #4F88EF; 
  color: #fff;
  font-family: Bello;
  font-size: 26px;
  position: fixed;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;

    button {
      background-color: #4F88EF;
      border: none;
    }

    @media screen and (min-width: 768px) {      
      button {
        display: none;
      }
    }
`;

export const NavDesktop = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
`;

export const NavButtonDesktop = styled.button`
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 15px;
    height: 40px;
    margin-right: 10px;  
`;