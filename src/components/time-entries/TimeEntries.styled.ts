import styled from "styled-components";

export const TimeEntries = styled.div`
  color: ${({ theme }) => theme.greyColor700};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  font-weight: 600;
  justify-content: space-between;
  padding: 20px;
`;
