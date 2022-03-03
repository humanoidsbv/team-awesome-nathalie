import Link from "next/link";

import * as Styled from "./Navigation.styled";

interface NavigationProps {
  isActive: boolean;
}

export const Navigation = ({ isActive }: NavigationProps) => {
  return (
    <Styled.Container>
      <Styled.Menu {...{ isActive }}>
        <li>
          <Link href="/" passHref>
            <Styled.Link>Timesheets</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/team-members" passHref>
            <Styled.Link>Team members</Styled.Link>
          </Link>
        </li>
        <li>
          <Styled.Link>Projects</Styled.Link>
        </li>
        <li>
          <Styled.Link>Clients</Styled.Link>
        </li>
        <li>
          <Styled.Link>Documents</Styled.Link>
        </li>
      </Styled.Menu>
    </Styled.Container>
  );
};
