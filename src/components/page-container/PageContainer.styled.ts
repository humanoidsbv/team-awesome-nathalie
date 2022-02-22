import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding-top: 200px;

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    padding-top: 150px;
  }
`;
