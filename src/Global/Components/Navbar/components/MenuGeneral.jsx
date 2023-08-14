import { Divider, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../../../Context/UserContext";

export const MenuGeneral = (props) => {
  const { menuClose } = props;
  const { authStatus } = useContext(UserContext);

  return (
    <>
      <MenuItem onClick={menuClose} component={NavLink} to={"/"}>
        Inicio
      </MenuItem>
      <MenuItem onClick={menuClose} component={NavLink} to={"/about-us"}>
        Sobre Nosotros
      </MenuItem>
      <MenuItem onClick={menuClose} component={NavLink} to={"/about-air"}>
        Sobre el Aire
      </MenuItem>
      <Divider variant="middle" />
      {authStatus ? (
        <MenuItem onClick={menuClose} component={NavLink} to={"/dashboard"}>
          Dashboard
        </MenuItem>
      ) : (
        <MenuItem onClick={menuClose} component={NavLink} to={"/auth/login"}>
          Iniciar Sesion
        </MenuItem>
      )}
    </>
  );
};
