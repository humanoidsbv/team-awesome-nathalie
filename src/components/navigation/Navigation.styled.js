import styled from 'styled-components';

export const Container = styled.nav`
  background: #4F88EF; 
  font-family: Proxima Nova;
  height: fill-available;
  margin: 50px;
  text-align: center;

  @media screen and (min-width: 768px){
    margin: 10px; 
    padding: 20px 28px;
 }
`;

export const Menu = styled.ul`
    align-items: center;
    font-size: 26px;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
        padding: 20px;
    }

    a {
        color: #fff;
        text-align: center;
        text-decoration : none;
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