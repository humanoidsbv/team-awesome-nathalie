import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  icon?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  kind?: "primary" | "secondary";
}

export const Button = ({ icon, label, onClick, kind }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, kind }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
