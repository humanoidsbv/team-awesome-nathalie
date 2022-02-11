import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isActive: boolean;
}

export const Navigation = ({ isActive }: NavigationProps) => {
  return (
    <Styled.Container>
      <Styled.Menu isActive={isActive}>
        <li>
          <a href="#">Timesheets</a>
        </li>
        <li>
          <a href="#">Team members</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Clients</a>
        </li>
        <li>
          <a href="#">Documents</a>
        </li>
      </Styled.Menu>
    </Styled.Container>
  );
};
