import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  Stack,
  Toolbar,
} from "@mui/material";

import ImageUEB from "../../../assets/images/logoUniversidadElBosque.png";
import AirImg from "../../../assets/images/air_img.png";
import { Link, NavLink, useLocation } from "react-router-dom";

import { motion, useScroll } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";

import "./NavBar.css";
import { useMenuPop } from "./hooks/useMenuPop";
import { MenuGeneral } from "./components/MenuGeneral";
import { useEffect, useState } from "react";
import { AppBarIf } from "./components/AppBarIf";
import { LoginButton } from "./components/LoginButton";

export const NavBar = () => {
  const { anchorElNav, openNav, menuOpen, menuClose } = useMenuPop();

  const [loginPage, setLoginPage] = useState(false);
  const [dashboardPage, setDashboardPage] = useState(false);

  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (location.pathname === "/auth/login") {
      setLoginPage(true);
    } else {
      setLoginPage(false);
    }

    if (location.pathname === "/dashboard") {
      setDashboardPage(true);
    } else {
      setDashboardPage(false);
    }
  });

  return (
    <>
      <Box
        component={motion.div}
        height={"100vh"}
        width={"10px"}
        bgcolor={"secondary.dark"}
        style={{ scaleY: scrollYProgress }}
        position={"fixed"}
        sx={{ right: 0, top: 0, transformOrigin: "0 0" }}
        zIndex={10}
      />
      <AppBarIf isLoginPage={loginPage}>
        <Toolbar>
          <Stack
            direction={"row"}
            component={Link}
            to={"/"}
            sx={{ display: { md: "flex" } }}
          >
            <Box
              component={"img"}
              src={ImageUEB}
              alt={"Logo"}
              className="img-logo"
            />
            <Box
              component={"img"}
              src={AirImg}
              alt={"Logo"}
              className="img-logo"
            />
          </Stack>

          {!loginPage && <Box sx={{ flexGrow: 1 }} />}

          {!loginPage && (
            <Box
              direction={"row"}
              sx={{ display: { md: "flex", xs: "none" } }}
              mx={1}
            >
              <Button color={"inherit"} component={NavLink} to={"/"}>
                Inicio
              </Button>
              <Button color="inherit" component={NavLink} to={"/about-us"}>
                Sobre Nosotros
              </Button>
              <Button color="inherit" component={NavLink} to={"/about-air"}>
                Mas sobre el aire
              </Button>
            </Box>
          )}

          <LoginButton isLoginPage={loginPage} />

          {!loginPage && (
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="MenuReduced"
                aria-controls="menu-general"
                aria-haspopup="true"
                color="inherit"
                onClick={menuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          <Menu anchorEl={anchorElNav} open={openNav} onClose={menuClose}>
            <MenuGeneral menuClose={menuClose} />
          </Menu>
        </Toolbar>
      </AppBarIf>
    </>
  );
};
