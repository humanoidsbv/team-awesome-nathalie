import styled from "styled-components";

export const Modal = styled.div`
  background-color: #fff;
  color: ${({ theme }) => theme.greyColor700};
  font-family: ${({ theme }) => theme.fontPrimary};
  height: 100vh;
  padding: 30px 20px;
  position: absolute;
  top: 0;
  width: 100vw;

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    padding: 20px 0 10px;
  }

  svg {
    fill: #000;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  input {
    font-size: 14px;
    height: 40px;
    width: 500px;
  }

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    background-color: rgba(75, 84, 100, 0.8);
    height: 100vh;
    width: 100vw;
  }
`;

export const Children = styled.div`
  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    background: #fff;
    border-radius: 4px;
    height: 436px;
    margin: 0 auto;
    padding: 30px;
    width: 560px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
`;
