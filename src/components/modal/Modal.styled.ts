import styled from "styled-components";

export const Modal = styled.div`
  background-color: #fff;
  color: ${({ theme }) => theme.greyColor700};
  font-family: ${({ theme }) => theme.fontPrimary};
  height: 100vh;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 100vw;

  h1 {
    font-size: 18px;
    padding-bottom: 20px;
  }

  p {
    font-size: 14px;
    padding-bottom: 70px;
  }
`;
