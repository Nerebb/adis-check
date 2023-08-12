import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { TopBar2 } from "./TopBar";
import React, { useState } from "react";

const NavbarAuth = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    await logout();
    navigate("/");
  }

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
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/category">
                    Advance Search
                  </a>
                </li>
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
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/postad">
                    Post Free Ad
                  </a>
                </li>
                <li className="nav-item dropdown imagedrops">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>
                      <img
                        className="max-width-50px rounded-circle"
                        src="img/logo.png"
                        alt="PublicAdisthemes"
                      />
                    </span>
                    <span
                      className="cap-first-letter"
                      style={{ display: "inline-block" }}
                    >
                      {user.username ?? "PublicAdis"}
                    </span>
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu border-0 shadow">
                    <li>
                      <a href="/about-us" className="dropdown-item">
                        <i className="fa fa-dashboard"></i> Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="dropdown-item">
                        <i className="fa fa-sign-out"></i> Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        <i className="fa fa-sign-out"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const DropdownItem = ({ title, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`nav-item dropdown ${isOpen ? "show" : ""}`}>
      <a
        href="#"
        role="button"
        onClick={handleToggle}
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {title} <i className="fa fa-angle-down"></i>
      </a>
      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {subItems.map((item, index) => (
          <li key={index}>
            <a href="/category" className="dropdown-item">
              {item}
            </a>
          </li>
        ))}
      </ul>
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

export default NavbarAuth;
