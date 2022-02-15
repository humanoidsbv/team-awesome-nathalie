import styled from "styled-components";

export const TimeEntry = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.greyColor300};
  border-left: 4px solid ${({ theme }) => theme.primaryColor500};
  border-radius: 4px;
  color: ${({ theme }) => theme.greyColor900};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: 18px;
  font-weight: 600;
  justify-content: space-between;
  margin: 0 10px;
  padding: 20px;
`;

export const TimeText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const TimeTextTime = styled.span`
  color: ${({ theme }) => theme.greyColor700};
  font-size: 14px;
  padding-top: 10px;
`;
