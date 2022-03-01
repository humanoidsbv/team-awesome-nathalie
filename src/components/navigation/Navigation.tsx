import Link from "next/link";

import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isActive: boolean;
}

export const Navigation = ({ isActive }: NavigationProps) => {
  return (
    <Styled.Container>
      <Styled.Menu isActive={isActive}>
        <li>
          <Link href="/">
            <a>Timesheets</a>
          </Link>
        </li>
        <li>
          <Link href="/team-members">
            <a>Team members</a>
          </Link>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Clients</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Styled.Menu>
    </Styled.Container>
  );
};
