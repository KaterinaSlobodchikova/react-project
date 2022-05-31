import { FC } from "react";
import { FooterContainer } from "./styled";

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <div className="bottom-line" />
      <div className="footer-info">
        <span>©2022 Blogfolio</span>
        <span>All rights reserved</span>
      </div>
    </FooterContainer>
  );
};
