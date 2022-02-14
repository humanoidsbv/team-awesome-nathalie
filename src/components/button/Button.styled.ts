import styled, { css } from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 4px;
  border: none;
  color: #fff;
  display: flex;
  font-size: 14px;
  gap: 15px;
  justify-content: center;
  padding: 13px 30px;
  width: 100%;

  ${({ style }) =>
    style === "secondary" &&
    css`
      color: green;
      border: 10px solid gray;
    `};
`;
