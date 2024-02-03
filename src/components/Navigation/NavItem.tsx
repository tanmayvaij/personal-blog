import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface NavItemProps {
  name: string;
  path: string;
  icon: JSX.Element;
}

const NavItem: FC<NavItemProps> = ({ name, path, icon }) => {
  const { pathname } = useLocation();

  return (
    <NavLink className="space-x-2 flex items-center font-medium" to={path}>
      {icon}
      <span
        className={`hover:text-red-300 ${path === pathname && "text-red-500"}`}
      >
        {name}
      </span>
    </NavLink>
  );
};

export default NavItem;
