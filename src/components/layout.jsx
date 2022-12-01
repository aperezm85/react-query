import { NavLink, Outlet } from "react-router-dom";

import logo from "../assets/logo.svg";

import "./layout.scss";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <img src={logo} className="layoutLogo" alt="logo" />
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/episodes"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Episodes
            </NavLink>
            <NavLink
              to="/characters"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Characters
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
