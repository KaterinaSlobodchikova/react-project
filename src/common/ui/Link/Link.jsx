import { PrimaryLink, SecondaryLink } from "./styled";

export const Link = (props) => {
  const { type = "primary", text, to = "#" } = props;

  const map = {
    primary: <PrimaryLink href={to}>{text}</PrimaryLink>,
    secondary: <SecondaryLink href={to}>{text}</SecondaryLink>,
  };

  return map[type];
};
