import styled from "styled-components";

export const NewTeamMember = styled.div`
  font-family: ${({ theme }) => theme.fontPrimary};
  margin-top: 40px;

  img {
    display: block;
    border-radius: 50%;
    height: 100px;
    margin: 0 auto;
    width: 100px;
  }

  p {
    color: ${({ theme }) => theme.greyColor900};
    font-size: 18px;
    margin: 10px 0 20px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
  }

  input {
    border: 1px solid ${({ theme }) => theme.greyColor300};
    border-radius: 4px;
    font-size: 14px;
    height: 40px;
    margin: 10px 0 20px;
    padding: 15px;
    width: 100%;
  }
`;

export const Small = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
