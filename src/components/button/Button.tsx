import * as Styled from "./Button.styled";

import PlusIcon from "../../../public/icons/plus-icon.svg";

import * as Types from "../../types/Button.types";

export const Button = ({ disabled, icon, label, onClick, kind }: Types.ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, kind, disabled }}>
      {icon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
