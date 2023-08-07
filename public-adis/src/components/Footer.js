import React, { useState } from "react";

const FooterSection = ({ title, links }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [popularCategories] = useState([
    { url: "/category", label: "Properties" },
    { url: "/category", label: "Jobs" },
    { url: "/category", label: "Phones" },
    { url: "/category", label: "Cars" },
    { url: "/category", label: "Rent" },
    { url: "/category", label: "Electronics" },
  ]);

  const [locations] = useState([
    { url: "#", label: "London" },
    { url: "#", label: "Barcelona" },
    { url: "#", label: "New York" },
    { url: "#", label: "France" },
    { url: "#", label: "Lahore" },
    { url: "#", label: "Mumbai" },
  ]);

  const [importantLinks] = useState([
    { url: "/", label: "Home" },
    { url: "/about-us", label: "About" },
    { url: "/contactus", label: "Contact Us" },
    { url: "/loginRegister", label: "Login" },
    { url: "/blog", label: "Blog" },
    { url: "/faq", label: "Faqs" },
  ]);

  return (
    <>
      <footer>
        <div className="background-header footer_padding">
          <div className="container">
            <div className="navigation_footer">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="about-us-info">
                    <p>
                      <img
                        src="img/logo_200x200.png"
                        className="max-width-100px"
                        alt="logo"
                      />
                    </p>
                    <p>
                      <i className="fa fa-phone"></i> 123-456-987
                    </p>
                    <p>
                      <i className="fa fa-map-marker"></i> LATAM, Perú, Cusco
                    </p>
                  </div>
                </div>
                <FooterSection title="Popular Categories" links={popularCategories} />
                <FooterSection title="Location" links={locations} />
                <FooterSection title="Important Links" links={importantLinks} />
              </div>
              <div className="footer-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 zeropadd">
                      <p>
                        2023 Made with love "PublicAdis" Powered by
                        <i className="fa fa-heart"></i>
                        <a href="#" className="greens">
                          DiverEdu
                        </a>
                      </p>
                    </div>
                    <div className="col-md-6 zeropaddon768">
                      <ul className="pages-links zeropadd">
                        <li>
                          <a href="#">Terms &amp; Condition</a>
                        </li>
                        <li>
                          <a href="/dashboard">Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy </a>
                        </li>
                        <li>
                          <a href="/aboutus">About Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;