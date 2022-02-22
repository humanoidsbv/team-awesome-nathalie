import React, { useState } from "react";

import { Button } from "../button/Button";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  buttonLabel: string;
  onClick: () => void;
  subTitle: string;
  title: string;
}

export const Subheader = ({ buttonLabel, onClick, subTitle, title }: SubheaderProps) => {
  return (
    <Styled.Container>
      <Styled.TimesheetText>
        {title}
        <Styled.EntryText>{subTitle}</Styled.EntryText>
      </Styled.TimesheetText>
      <Styled.Button>
        <Button icon label={buttonLabel} {...{ onClick }} />
      </Styled.Button>
    </Styled.Container>
  );
};
