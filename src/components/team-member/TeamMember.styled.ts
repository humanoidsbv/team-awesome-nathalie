import styled from "styled-components";

export const TeamMemberContainer = styled.div`
  background-color: #fff;

  border: 1px solid ${({ theme }) => theme.greyColor300};
  border-left: 4px solid #4f88ef;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: 600;
  margin: 20px 15px;
  padding: 25px 15px;

  img {
    border-radius: 50%;
    height: 50px;
    margin-right: 20px;
    width: 50px;
  }

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 30px 15px 20px;
  }
`;

export const TeamMember = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.greyColor300};
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    border: none;
    padding: 0;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.greyColor900};
  display: flex;
  flex-direction: column;
  font-size: 18px;

  p {
    color: ${({ theme }) => theme.greyColor700};
    font-size: 14px;
    line-height: 14px;
  }
`;

export const WorkInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 25px;

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    align-items: center;
    margin: 0;
  }
`;
