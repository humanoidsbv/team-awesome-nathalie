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
  padding-left: 20px;
`;

export const TimeText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: auto;
  margin-right: 25px;
`;

export const HoursWorked = styled.span`
  color: ${({ theme }) => theme.greyColor700};
  font-size: 14px;
  padding-top: 10px;
`;

export const DeleteButton = styled.div`
  padding: 30px 15px;
  border: 1px dashed transparent;

  svg {
    fill: ${({ theme }) => theme.greyColor700};
  }

  :hover {
    border: 1px dashed ${({ theme }) => theme.greyColor300};
    cursor: pointer;

    svg {
      fill: #ffa2ad;
    }
  }
`;
