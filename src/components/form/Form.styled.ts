import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  label {
    padding: 20px 0 10px;
    font-size: 14px;
  }

  input {
    font-size: 14px;
    height: 40px;
    width: auto;
    padding: 15px;
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
`;

export const StartTimeInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EndTimeInput = styled.div`
  display: flex;
  flex-direction: column;
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
    gap: 20px;
  }
`;
