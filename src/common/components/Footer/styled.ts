import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 92px;

  font-size: 16px;
  font-weight: 400;

  color: ${(props) => props.theme.palette.background.gray};
  background-color: #e5e5e5;

  .bottom-line {
    //position: absolute;
    width: 1120px;
    height: 1px;
    background: ${(props) => props.theme.palette.background.medium};
  }

  .footer-info {
    padding: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
