import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e6eaee;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  padding: 20px;
  width: 100%;

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 30px;
  }
`;

export const TimesheetText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
    padding-bottom: 0;
  }
`;

export const EntryText = styled.span`
  color: #7f8fa4;
  font-size: 14px;

  @media screen and (${({ theme }) => theme.breakpointTablet}) {
    border-left: 1px solid #7f8fa4;
    margin-left: 15px;
    padding-left: 15px;
  }
`;

export const Button = styled.div`
  align-items: center;

  @media screen and (${({ theme }) => theme.breakpointMobile}) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
