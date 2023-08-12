import React from "react";
import TopBar, { TopBar2 } from "./TopBar";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="background-header">
      <TopBar />
      <div className="container">
        <div className="navigation">
          <nav className="navbar navbar-expand-lg justify-content-between nav-color zeropadd">
            <div className="navbar-header">
              <a className="navbar-brand zeropadd" href="/">
                <img
                  src="img/logo_200x200.png"
                  alt="logo"
                  className="max-width-60px"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <NavItem link="/" label="Inicio" isActive={true} />
                <NavItem link="/category" label="Búsqueda avanzada" />
                <NavDropdown label="Categorias">
                  <NavDropdownItem link="/category" label="Trabajos" />
                  <NavDropdownItem link="/category" label="Propiedades" />
                  <NavDropdownItem link="/category" label="Celulares">
                    <NavDropdownItem link="/category" label="Apple" />
                    <NavDropdownItem link="/category" label="Samsung" />
                    <NavDropdownItem link="/category" label="LG" />
                  </NavDropdownItem>
                  <NavDropdownItem link="/category" label="Carros">
                    <NavDropdownItem link="/category" label="Toyota" />
                    <NavDropdownItem link="/category" label="Suzuki" />
                    <NavDropdownItem link="/category" label="Honda" />
                  </NavDropdownItem>
                  <NavDropdownItem link="/category" label="Renta" />
                  <NavDropdownItem link="/category" label="Servicios" />
                </NavDropdown>

                <NavDropdown label="Páginas">
                  <NavDropdownItem link="/about-us" label="Info" />
                  <NavDropdownItem link="blog" label="Blog" />
                  <NavDropdownItem link="/contactus" label="Contáctanos" />
                  <NavDropdownItem link="/faq" label="Faq" />
                </NavDropdown>

                <NavItem link="/contactus" label="Contáctanos" />
                <NavItem
                  link="/loginRegister"
                  label={
                    <>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span>{user.username ?? "Login/Registro"}</span>
                    </>
                  }
                />
                <NavAd link="/postad" label="Anuncia Gratis" />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export const Navbar2 = () => {
  const { user } = useAuth();
  return (
    <div className="background-header">
      <TopBar2 />
      <div className="container">
        <div className="navigation">
          <nav className="navbar navbar-expand-lg justify-content-between nav-color zeropadd">
            <div className="navbar-header">
              <a className="navbar-brand zeropadd" href="/">
                <img
                  src="img/logo_200x200.png"
                  alt="logo"
                  className="max-width-60px"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <NavItem link="/" label="Home" isActive={true} />
                <NavItem link="/category" label="Advance Search" />
                <NavDropdown label="Categories">
                  <NavDropdownItem link="/category" label="Jobs" />
                  <NavDropdownItem link="/category" label="Properties" />
                  <NavDropdownItem link="/category" label="Phones">
                    <NavDropdownItem link="/category" label="Apple" />
                    <NavDropdownItem link="/category" label="Samsung" />
                    <NavDropdownItem link="/category" label="LG" />
                  </NavDropdownItem>
                  <NavDropdownItem link="/category" label="Cars">
                    <NavDropdownItem link="/category" label="Toyota" />
                    <NavDropdownItem link="/category" label="Suzuki" />
                    <NavDropdownItem link="/category" label="Honda" />
                  </NavDropdownItem>
                  <NavDropdownItem link="/category" label="Rent" />
                  <NavDropdownItem link="/category" label="Services" />
                </NavDropdown>

                <NavDropdown label="Pages">
                  <NavDropdownItem link="/about-us" label="About" />
                  <NavDropdownItem link="blog" label="Blog" />
                  <NavDropdownItem link="/contactus" label="Contact Us" />
                  <NavDropdownItem link="/faq" label="Faq" />
                </NavDropdown>

                <NavItem link="/contactus" label="Contact Us" />
                <NavItem
                  link="/loginRegister"
                  label={
                    <>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span>{user.username ?? "Login/Registro"}</span>
                    </>
                  }
                />
                <NavAd link="/postad" label="Post Free Ad" />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ link, label, isActive }) => {
  return (
    <li className={`nav-item${isActive ? " active" : ""}`}>
      <a className="nav-link" href={link}>
        {label}
        {isActive && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
};

const NavAd = ({ link, label, isActive }) => {
  return (
    <li className={`nav-item bordering ${isActive ? " active" : ""}`}>
      <a className="nav-link" href={link}>
        {label}
        {isActive && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
};

const NavDropdown = ({ label, children }) => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        className="nav-link dropdown-toggle"
      >
        {label} <i className="fa fa-angle-down"></i>
      </a>
      <ul className="dropdown-menu border-0 shadow">{children}</ul>
    </li>
  );
};

const NavDropdownItem = ({ link, label, children }) => {
  if (children) {
    return (
      <li className="dropdown-submenu">
        <a
          href={link}
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          className="dropdown-item dropdown-toggle"
        >
          {label}
        </a>
        <ul className="dropdown-menu border-0 shadow">{children}</ul>
      </li>
    );
  } else {
    return (
      <li>
        <a href={link} className="dropdown-item">
          {label}
        </a>
      </li>
    );
  }
};

export default Navbar;
