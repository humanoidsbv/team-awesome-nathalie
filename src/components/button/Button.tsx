import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
  icon?: boolean;
}

export const Button = ({ onClick, icon, label, style }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
