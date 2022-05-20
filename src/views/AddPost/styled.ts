import styled from "styled-components";

export const AddPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  width: 624px;

  border: 1px solid #dadada;
  background-color: #dadada;

  .gray {
    color: ${({ theme }) => theme.palette.system.secondary};
    background-color: ${({ theme }) => theme.palette.background.light};
  }
`;
