import React from "react";

import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  disabled?: boolean;
  icon?: boolean;
  id?: string;
  kind?: "primary" | "secondary";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ disabled, icon, label, onClick, kind, id }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, kind, disabled, id }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
