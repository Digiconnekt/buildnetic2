import React from "react";

const Header = () => {
  const location = window.location.pathname;

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="header-logo col-xs-9 col-sm-3 align-left">
              <a
                className="header-logo__link"
                href="/"
                rel="home"
                style={{ maxWidth: "90px" }}
              >
                <img
                  src="/assets/images/buildnetic-logo.png"
                  alt=""
                  style={{ width: "100%", padding: "10px" }}
                />
              </a>
            </div>

            <nav className="menu-nav col-xs-3 col-sm-9">
              <div className="menu-toggle">
                <div className="menu-toggle__inner"></div>
              </div>
              <ul className="menu align-right">
                <li className="menu__item menu-mobile-logo">
                  <a
                    className="header-logo__link"
                    href="/"
                    rel="home"
                    style={{ maxWidth: "80px" }}
                  >
                    <img
                      src="/assets/images/buildnetic-logo.png"
                      alt=""
                      style={{ width: "100%", padding: "10px" }}
                    />
                  </a>
                </li>
                <li className="menu__item  menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    className={`${
                      location === "/"
                        ? "menu__link menu__link_active"
                        : "menu__link"
                    }`}
                    href="/"
                    target="_self"
                  >
                    Home
                  </a>
                </li>
                <li className="menu__item  menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    className={`${
                      location === "/about-us"
                        ? "menu__link menu__link_active"
                        : "menu__link"
                    }`}
                    href="/about-us"
                    target="_self"
                  >
                    About Us
                  </a>
                </li>
                <li className="menu__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                  <a
                    className={`${
                      location === "/services" ||
                      location === "/services/mobile-application-development" ||
                      location === "/services/devops-solution-and-services" ||
                      location === "/services/product-re-engineering" ||
                      location === "/services/data-analytics" ||
                      location === "/services/testing"
                        ? "menu__link menu__link_active"
                        : "menu__link"
                    }`}
                    href="/services"
                    target="_self"
                  >
                    Services
                  </a>
                  <ul className="submenu">
                    <li className="submenu__item  menu-item menu-item-type-post_type menu-item-object-page">
                      <a
                        className="submenu__link"
                        href="/services/mobile-application-development"
                        target="_self"
                      >
                        Mobile Application Development
                      </a>
                    </li>
                    <li className="submenu__item  menu-item menu-item-type-post_type menu-item-object-page">
                      <a
                        className="submenu__link"
                        href="/services/devops-solution-and-services"
                        target="_self"
                      >
                        DevOps Solutions & Services
                      </a>
                    </li>
                    <li className="submenu__item  menu-item menu-item-type-post_type menu-item-object-page">
                      <a
                        className="submenu__link"
                        href="/services/product-re-engineering"
                        target="_self"
                      >
                        Product Re-Engineering
                      </a>
                    </li>
                    <li className="submenu__item  menu-item menu-item-type-post_type menu-item-object-page">
                      <a
                        className="submenu__link"
                        href="/services/data-analytics"
                        target="_self"
                      >
                        Data Analytics
                      </a>
                    </li>
                    <li className="submenu__item  menu-item menu-item-type-post_type menu-item-object-page">
                      <a
                        className="submenu__link"
                        href="/services/testing"
                        target="_self"
                      >
                        Testing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu__item  menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    className={`${
                      location === "/success-stories"
                        ? "menu__link menu__link_active"
                        : "menu__link"
                    }`}
                    href="/success-stories"
                    target="_self"
                  >
                    Success Stories
                  </a>
                </li>
                <li className="menu__item  menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    className={`${
                      location === "/blog"
                        ? "menu__link menu__link_active"
                        : "menu__link"
                    }`}
                    href="/blog"
                    target="_self"
                  >
                    Blog
                  </a>
                </li>
                <li className="menu__item  menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    className={`${
                      location === "/contact-us"
                        ? "menu__link menu__link_active"
                        : "menu__link"
                    }`}
                    href="/contact-us"
                    target="_self"
                  >
                    Contact Us
                  </a>
                </li>
                {/* <li className="menu__item  menu-item menu-item-type-post_type menu-item-object-page">
                  <a className="menu__link" href="/contact-us" target="_self">
                    <p
                      style={{
                        padding: "4px 7px",
                        border: "1px solid #0075FF",
                        fontSize: "14px",
                      }}
                    >
                      Contact us
                    </p>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
