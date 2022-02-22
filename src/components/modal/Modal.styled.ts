import styled from "styled-components";

export const ModalContainer = styled.div`
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
    font-weight: 400;
  }

  svg {
    fill: #000;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    background-color: rgba(75, 84, 100, 0.8);
    height: 100vh;
    width: 100vw;
  }
`;

export const ModalContent = styled.div`
  height: 100%;
  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    background: #fff;
    border-radius: 4px;
    height: 436px;
    margin: 0 auto;
    padding: 30px;
    width: 560px;
  }
`;
