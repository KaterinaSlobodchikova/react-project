import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 92px;

  font-size: 16px;
  font-weight: 400;

  padding: 20px;

  color: ${(props) => props.theme.palette.background.gray};
  background-color: #fff;
`;
