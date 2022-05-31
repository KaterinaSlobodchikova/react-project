import styled from "styled-components";

export const ResetPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  width: 624px;

  border: 3px solid #dadada;
`;

export const EmailReceived = styled.div`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.palette.system.secondary};
  .email {
    font-weight: 700;
  }
`;
