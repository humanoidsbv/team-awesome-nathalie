import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  icon?: boolean;
  kind?: "primary" | "secondary";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ icon, label, onClick, kind }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, kind }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
