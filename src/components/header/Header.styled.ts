import styled from "styled-components";
import ArrowDownIcon from "../../../public/icons/arrow-down.svg";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  z-index: 20;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryColor500};
  color: #fff;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 26px;
  width: 100vw;

  a {
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
  }

  svg {
    fill: #fff;
  }

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
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
    background-color: ${({ theme }) => theme.primaryColor500};
    border: none;
  }

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
    justify-content: start;

    button {
      display: none;
    }
  }
`;

export const UserContainer = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
    align-items: center;
    display: flex;
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const UserButton = styled.button`
  align-items: center;
  border-radius: 20px;
  border: 1px solid #fff;
  display: flex;
  height: 40px;
  margin-right: 10px;
  padding: 2px 2px 2px 15px;
  width: 150px;

  img {
    border-radius: 50%;
    height: 36px;
    margin-left: auto;
    width: 36px;
  }
`;

export const ArrowDown = styled(ArrowDownIcon)`
  fill: #fff;
`;
