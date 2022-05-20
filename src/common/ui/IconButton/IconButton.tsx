import { FC } from "react";

import { Icon, StyledButton } from "./styled";

type IconButtonProps = {
  icon: string;
  disabled?: boolean;
  title: string;
  onClick: () => void;
};

export const IconButton: FC<IconButtonProps> = (props) => {
  const { disabled = false, icon, title, onClick } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <Icon src={icon} />
      {title}
    </StyledButton>
  );
};
