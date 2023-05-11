// import { Link } from "react-router-dom";
import {
  Nav,
  Logo,
  Menu,
  MenuLink,
  Hamburger,
  IMG,
} from "./globalStyles/Navbar.styled";
import { useState } from "react";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuthContext } from "../context/AuthContext";
import { logout } from "../auth/firebase";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userCheck } = useAuthContext();
  
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <IMG src={logo} alt="logo" />
        <p>tMDB</p>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        {/* <MenuLink to="/">Home</MenuLink> */}
        {userCheck ? (
          <>
            <h5>{userCheck.displayName}</h5>
            <MenuLink to="/" onClick={logout}>
              Log Out
            </MenuLink>
          </>
        ) : (
          <>
            <MenuLink to="register">Register</MenuLink>
            <MenuLink to="login">Login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
