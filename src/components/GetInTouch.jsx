import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <>
      <div className="section getInTouch pt-0 pb-0" id="cta">
        <div className="align-left">
          <div className="s-get-it-2">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 align-middle">
                  <h5
                    className="s-get-it-2__title"
                    style={{ color: "#0075FF" }}
                  >
                    Get In Touch With Us <br />{" "}
                    <span style={{ fontSize: "15px", color: "#fff" }}>
                      Either by Phone or Email we would love to answer any
                      questions you may have.
                      <br />
                      <a href="tel:+6587993124" style={{ marginRight: "25px" }}>
                        <i class="fas fa-mobile-alt"></i>
                        +65-87993124
                      </a>
                      <a href="mailto:info@buildnetic.com">
                        <i class="far fa-envelope"></i>
                        info@buildnetic.com
                      </a>
                    </span>
                  </h5>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 align-middle">
                  <a
                    href="/contact-us"
                    className="btn-a btn-a_fill_theme"
                    style={{
                      borderRadius: "5px",
                      borderColor: "#0075ff",
                    }}
                  >
                    Get quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
