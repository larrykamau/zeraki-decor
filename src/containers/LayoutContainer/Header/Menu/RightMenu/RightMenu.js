import React from "react";
import NavLink from "components/NavLink/NavLink";
import Button from "components/Button/Button";
import Popover from "components/Popover/Popover";
import { AuthorizedMenu } from "../AuthorizedMenu";
import { HelpIcon } from "components/AllSvgIcon";
import { RightMenuBox } from "./RightMenu.style";
import { AuthContext } from "contexts/auth/auth.context";

export const RightMenu = ({ onLogout, avatar, isAuthenticated, onJoin }) => {
  const {
    authState: { profile },
  } = React.useContext(AuthContext);
  return (
    <RightMenuBox>
      {isAuthenticated ? (
        <>
          <NavLink className="menu-item" href={`/`} label="Works" />
          <NavLink className="menu-item" href={`/`} label="Services" />
        </>
      ) : (
        <>
          <NavLink className="menu-item" href={`/`} label="About" />
          <NavLink className="menu-item" href={`/`} label="Services" />
          <NavLink className="menu-item" href={`/`} label="Blog" />
          <NavLink className="menu-item" href={`/`} label="Works" />
        </>
      )}
      <NavLink
        className="menu-item"
        href={`/help`}
        label="Need Help"
        iconClass="menu-icon"
        icon={<HelpIcon />}
      />

      {!isAuthenticated ? (
        <Button
          onClick={onJoin}
          size="small"
          title="Join"
          style={{ fontSize: 15, color: "#262533", backgroundColor: "#f9cc41" }}
        />
      ) : (
        <>
          <Popover
            direction="right"
            className="user-pages-dropdown"
            handler={<img src={avatar} alt="user" />}
            content={<AuthorizedMenu onLogout={onLogout} />}
          />
          <NavLink
            className="menu-item"
            href={`/`}
            label={`${
              profile.first_name !== "" ? profile.first_name : profile.email
            }`}
          />
        </>
      )}
    </RightMenuBox>
  );
};
