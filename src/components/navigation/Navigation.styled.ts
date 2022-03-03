import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor500};
  font-family: ${({ theme }) => theme.fontPrimary};
  text-align: center;

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
    margin: 0;
    padding: 0;
  }
`;

export const Menu = styled.ul<{ isActive: boolean }>`
  align-items: center;
  display: ${(props) => (props.isActive ? "block;" : "none;")};
  font-size: 26px;
  height: 100vh;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 20px;
  }

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
    display: flex;
    font-size: 14px;
    height: auto;

    li {
      display: inline;
    }
  }
`;

export const Link = styled.a<{ activeLink?: boolean }>`
  padding: 3px 10px;
  text-align: center;

  :hover {
    background-color: ${({ theme }) => theme.primaryColor700};
    cursor: pointer;
    padding: 3px 10px;
  }
`;
