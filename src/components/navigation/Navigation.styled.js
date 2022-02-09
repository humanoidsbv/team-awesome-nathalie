import styled from 'styled-components';

export const Container = styled.nav`
  background: #4F88EF; 
  height: fill-available;
  margin: 50px;
  font-family: Proxima Nova;
  text-align: center;

  @media screen and (min-width: 768px){
    margin: 10px; 
    padding: 20px 28px;
 }
`;

export const Menu = styled.ul`
    font-size: 26px;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    
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

    @media screen and (min-width: 768px){
        font-size: 14px;
        li {
        display: inline;
        }
    }
`;