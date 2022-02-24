import styled from "styled-components";

export const TimeEntriesHeader = styled.div`
  color: ${({ theme }) => theme.greyColor700};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  font-weight: 600;
  justify-content: space-between;
  padding: 30px 20px 20px;
`;
