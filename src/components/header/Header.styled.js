import styled from 'styled-components';
import ArrowDownIcon from "../../../public/icons/arrow-down.svg"

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

  @media screen and (min-width: 945px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
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

    @media screen and (min-width: 945px) {      
      justify-content: start;
      button {
        display: none;
      }
    }
`;

export const UserContainer = styled.div`
    display: none;

    @media screen and (min-width: 945px) {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: 32px;
    }
`;

export const UserButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #fff;
    height: 40px;
    margin-right: 10px;  
    padding: 2px 2px 2px 15px;
    width: 150px;

    img {
      margin-left: auto;
      border-radius: 50%;
    }
    `;

    export const ArrowDown = styled(ArrowDownIcon)`
      fill: white;
    `
