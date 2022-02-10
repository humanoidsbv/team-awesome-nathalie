import styled from "styled-components";

export const Container = styled.nav`
  background: #4f88ef;
  font-family: Proxima Nova;

  text-align: center;

  @media screen and (min-width: 945px) {
    margin: 0;
    padding: 0;
  }
`;

export const Menu = styled.ul<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "block;" : "none;")};
  align-items: center;
  font-size: 26px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100vh;

  li {
    padding: 20px;
  }

  a {
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    background-color: #1166a5;
  }

  @media screen and (min-width: 945px) {
    display: flex;
    font-size: 14px;
    height: auto;

    li {
      display: inline;
    }
  }
`;
