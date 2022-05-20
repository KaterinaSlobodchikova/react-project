import { FC } from "react";

import { PrimaryLink, SecondaryLink } from "./styled";

type LinkType = "primary" | "secondary";

interface LinkProps {
  type?: LinkType;
  text: string;
  to: string;
}

export const Link: FC<LinkProps> = (props) => {
  const { type = "primary", text, to = "#" } = props;

  const map: Record<LinkType, ReturnType<FC>> = {
    primary: <PrimaryLink href={to}>{text}</PrimaryLink>,
    secondary: <SecondaryLink href={to}>{text}</SecondaryLink>,
  };

  return map[type];
};
