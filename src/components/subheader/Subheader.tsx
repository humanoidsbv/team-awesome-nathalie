import { Button } from "../button/Button";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  buttonLabel: string;
  dataCy?: string;
  onClick: () => void;
  subtitle: string;
  title: string;
}

export const Subheader = ({ buttonLabel, onClick, subtitle, title }: SubheaderProps) => {
  return (
    <Styled.Container data-cy="subheader">
      <Styled.TimesheetText>
        {title}
        <Styled.EntryText>{subtitle}</Styled.EntryText>
      </Styled.TimesheetText>
      <Styled.Button>
        <Button icon label={buttonLabel} {...{ onClick }} />
      </Styled.Button>
    </Styled.Container>
  );
};
