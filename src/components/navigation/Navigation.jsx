import * as Styled from './Navigation.styled.js';

export const Navigation = () => {
    return (
        <Styled.Container>
         <Styled.Menu>
            <li><a href="#">Timesheets</a></li>
            <li><a href="#">Team members</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Documents</a></li>
          </Styled.Menu>
        </Styled.Container>
    );
  }