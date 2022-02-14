import styled, { css } from "styled-components";

interface ButtonProps {
  style?: "primary" | "secondary";
}

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

  ${({ style }: ButtonProps) =>
    style === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.greyColor100};
      color: ${({ theme }) => theme.greyColor900};
    `};
`;
