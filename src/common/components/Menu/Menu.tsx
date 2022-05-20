import { FC } from "react";

import { MenuItem, MenuNavLink, MenuWrapper } from "./styled";
import { useAppMenu } from "../../../router/menu";
import type { MenuModel } from "../../../router/types";

export const Menu: FC = () => {
  const { menu } = useAppMenu();

  const menuElements = menu.map((m: MenuModel) => {
    return (
      <MenuItem key={m.name}>
        <MenuNavLink to={m.path}>{m.title}</MenuNavLink>
      </MenuItem>
    );
  });

  return <MenuWrapper>{menuElements}</MenuWrapper>;
};
