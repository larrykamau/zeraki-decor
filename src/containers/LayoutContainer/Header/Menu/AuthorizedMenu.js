import React from "react";
import NavLink from "components/NavLink/NavLink";

const AUTHORIZED_MENU_ITEMS = [
  {
    link: "/",
    label: "Profile",
  },
  {
    link: "/",
    label: "Dashboard",
  },
];

export const AuthorizedMenu = ({ onLogout }) => {
  return (
    <>
      {AUTHORIZED_MENU_ITEMS.map((item, idx) => (
        <NavLink
          key={idx}
          className="menu-item"
          href={item.link}
          label={item.label}
        />
      ))}
      <NavLink
        onClick={onLogout}
        className="menu-item"
        href="/"
        label="logout"
      />
    </>
  );
};
