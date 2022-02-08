import styled from 'styled-components';

export const Container = styled.nav`
  background: #4F88EF; 
  height: fill-available;
  margin: 50px;
  font-family: Proxima Nova;
  text-align: center;
`;

export const Menu = styled.ul`
    font-size: 26px;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
        padding: 20px;
    }

    a {
        text-decoration : none;
        color: #fff;
        text-align: center;
    }

    a:hover {
        background-color: #1166A5;
    }
`;