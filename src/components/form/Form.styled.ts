import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;

  label {
    font-size: 14px;
    padding: 20px 0 10px;
  }

  input {
    font-size: 14px;
    height: 40px;
    padding: 15px;
    width: auto;
  }

  p {
    font-size: 14px;
  }
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const DateInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 200px;
  }
`;

export const TimeInput = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    input {
      width: 80px;
    }
  }
`;

export const TotalTime = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-top: 20px;

  p {
    font-size: 24px;
    padding-top: 18px;
  }
`;

export const DateTimeInputWrapper = styled.div`
  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: auto;

  @media screen and (${({ theme }) => theme.breakpointDesktop}) {
    margin-bottom: 30px;
  }
`;
