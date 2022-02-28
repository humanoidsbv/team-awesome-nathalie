import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  disabled?: boolean;
  icon?: boolean;
  kind?: "primary" | "secondary";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ disabled, icon, label, onClick, kind }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, kind, disabled }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};

//test
