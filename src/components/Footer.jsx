import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* logo and contact details start */}
              <div className="col-xs-12 col-sm-6 col-md-3 pb-50">
                <div
                  id="custom_html-2"
                  className="widget_text widget widget-footer widget_custom_html"
                >
                  <div className="textwidget custom-html-widget">
                    <a
                      className="header-logo__link"
                      href="/"
                      rel="home"
                      style={{ maxWidth: "90px" }}
                    >
                      <img
                        src="/assets/images/buildnetic-logo.png"
                        alt=""
                        style={{
                          width: "100%",
                          padding: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
                <div
                  id="custom_html-3"
                  className="widget_text widget widget-footer widget_custom_html"
                  style={{
                    marginTop: "25px",
                  }}
                >
                  <div className="textwidget custom-html-widget">
                    <img
                      data-src="../assets/wp-content/uploads/2021/09/email.png"
                      className="lazyload"
                      src="../assets/wp-content/uploads/2021/09/email.png"
                    />
                    <noscript>
                      <img src="../assets/wp-content/uploads/2021/09/email.png" />
                    </noscript>
                    <p
                      style={{
                        marginTop: "-37px",
                        marginLeft: "36px",
                        fontSize: "14px",
                        color: "#000000",
                        fontWeight: "500",
                      }}
                    >
                      <a
                        href="mailto:info@buildnetic.com"
                        style={{
                          fontSize: "14px",
                          color: "#000000",
                          fontWeight: "500",
                        }}
                      >
                        info@buildnetic.com
                      </a>
                    </p>
                    <img
                      data-src="../assets/wp-content/uploads/2021/01/IND-Flag.png"
                      className="lazyload"
                      src="../assets/wp-content/uploads/2021/01/IND-Flag.png"
                    />
                    <noscript>
                      <img src="../assets/wp-content/uploads/2021/01/IND-Flag.png" />
                    </noscript>
                    <p
                      style={{
                        marginTop: "-37px",
                        marginLeft: "36px",
                        fontSize: "14px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      <a href="tel:+6587993124">+65 87993124</a>
                    </p>
                  </div>
                </div>
                <div
                  id="footer-contacts-10"
                  className="widget widget-footer widget_footer-contacts"
                >
                  <ul className="footer-contacts"></ul>
                  <div className="footer-social">
                    <a
                      href="https://www.facebook.com/buildnetic"
                      target="_blank"
                    >
                      <i className="ico-7 footer-social__item"></i>
                    </a>
                    <a href="https://twitter.com/buildnetic_" target="_blank">
                      <i className="ico-6 footer-social__item"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/buildnetic/"
                      target="_blank"
                    >
                      <i className="ico-2 footer-social__item"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* logo and contact details end */}

              {/* company start */}
              <div className="col-xs-12 col-sm-6 col-md-3 pb-50">
                <div id="text-5" className="widget widget-footer widget_text">
                  <h4
                    className="widget-title footer__title"
                    style={{ color: "#0a0039", fontWeight: "bold" }}
                  >
                    Company
                  </h4>
                  <div className="textwidget">
                    <p>
                      <a href="/services">Services</a>
                    </p>
                    <p>
                      <a href="/technology">Technology</a>
                    </p>
                    <p>
                      <a href="/engagement-model">Engagement Model</a>
                    </p>
                    <p>
                      <a href="/success-stories">Success Stories</a>
                    </p>
                    <p>
                      <a href="/about-us">About Us</a>
                    </p>
                    <p>
                      <a href="/contact-us">Contact us</a>
                    </p>
                    <p>
                      <a href="/blog">Blog</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* company end */}

              {/* services start */}
              <div className="col-xs-12 col-sm-6 col-md-3 pb-50">
                <div id="text-6" className="widget widget-footer widget_text">
                  <div className="textwidget">
                    <h4
                      className="widget-title footer__title"
                      style={{ color: "#0a0039", fontWeight: "bold" }}
                    >
                      Services
                    </h4>
                    <p>
                      <a href="/services/mobile-application-development">
                        Mobile Application Development
                      </a>
                    </p>
                    <p>
                      <a href="/services/devops-solution-and-services">
                        DevOps Solutions & Services
                      </a>
                    </p>
                    <p>
                      <a href="/services/product-re-engineering">
                        Product Re-Engineering
                      </a>
                    </p>
                    <p>
                      <a href="/services/data-analytics">Data Analytics</a>
                    </p>
                    <p>
                      <a href="/services/testing">Testing</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* services end */}

              {/* technology start */}
              <div className="col-xs-12 col-sm-6 col-md-3 pb-50">
                <div id="text-7" className="widget widget-footer widget_text">
                  <div className="textwidget">
                    <h4
                      className="widget-title footer__title"
                      style={{ color: "#0a0039", fontWeight: "bold" }}
                    >
                      Technology
                    </h4>
                    <p>
                      <a href="/nodejs">NodeJs</a>
                    </p>
                    <p>
                      <a href="/python">Python</a>
                    </p>
                    <p>
                      <a href="/java">Java</a>
                    </p>
                    <p>
                      <a href="/android">Android</a>
                    </p>
                    <p>
                      <a href="/ios">iOS</a>
                    </p>
                    <p>
                      <a href="/reactjs">ReactJs</a>
                    </p>
                    <p>
                      <a href="/react-native">React Native</a>
                    </p>
                    <p>
                      <a href="/angular">Angular</a>
                    </p>
                    <p>
                      <a href="/blockchain">Blockchain</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* technology end */}
            </div>
          </div>
        </div>
        <div
          className="footer-bottom"
          style={{ borderTop: "1px solid #caecff" }}
        >
          <div className="container">
            <div className="row">
              <ul className="footer-copy col-xs-12 col-sm-7 col-md-8">
                <li>© Buildnetic All Right Reserved.&nbsp;</li>
                {/* <li><a className="likeapro" href="//themeforest.net/item/nowadays-multipurpose-onemultipage-wordpress-theme/18399207" target="_blank" title="Nowadays - Multipurpose WordPress Theme">Nowadays</a> - WordPress Theme. Developed &amp; Designed by <a href="https://likeaprothemes.com" target="_blank" title="Premium WordPress themes" className="likeapro">like@prothemes</a></li> */}
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
