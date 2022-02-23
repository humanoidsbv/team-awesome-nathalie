import styled, { css } from "styled-components";

interface ButtonProps {
  kind?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  gap: 15px;
  justify-content: center;
  padding: 13px 30px;
  width: 100%;

  svg {
    fill: #fff;
  }

  ${({ kind }: ButtonProps) =>
    kind === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.greyColor100};
      color: ${({ theme }) => theme.greyColor900};
    `};

  ${({ disabled }: ButtonProps) =>
    disabled === true &&
    css`
      background-color: ${({ theme }) => theme.greyColor300};
      color: ${({ theme }) => theme.greyColor500};
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
