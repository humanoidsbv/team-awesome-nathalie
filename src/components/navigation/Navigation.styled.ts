import styled, { ThemeConsumer } from "styled-components";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor500};
  font-family: ${({ theme }) => theme.fontPrimary};
  text-align: center;

  @media (${({ theme }) => theme.desktop}) {
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

  a {
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    background-color: ${({ theme }) => theme.primaryColor700};
  }

  @media (${({ theme }) => theme.desktop}) {
    display: flex;
    font-size: 14px;
    height: auto;

    li {
      display: inline;
    }
  }
`;
