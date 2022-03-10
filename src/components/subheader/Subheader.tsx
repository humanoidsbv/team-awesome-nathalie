import React from "react";
import { Button } from "../button/Button";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  buttonLabel: string;
  id?: string;
  onClick: () => void;
  subtitle: string;
  title: string;
}

export const Subheader = ({ buttonLabel, id, onClick, subtitle, title }: SubheaderProps) => {
  return (
    <Styled.Container>
      <Styled.TimesheetText>
        {title}
        <Styled.EntryText>{subtitle}</Styled.EntryText>
      </Styled.TimesheetText>
      <Styled.Button>
        <Button icon label={buttonLabel} {...{ onClick }} id={id} />
      </Styled.Button>
    </Styled.Container>
  );
};
