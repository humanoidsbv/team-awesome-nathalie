import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  icon?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
}

export const Button = ({ icon, label, onClick, style }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, style }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
