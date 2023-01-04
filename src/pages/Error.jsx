import React from "react";

const Error = () => {
  return (
    <>
      <div className="wrapper-content">
        <div className="fw-page-builder-content">
          {/* hero section start */}
          <div className="section section-2 pb-0">
            <div className="hero">
              <div className="container hero-section">
                <div className="left-block">
                  <h1
                    style={{
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: "rgb(0, 117, 255)",
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: "55px" }}>404</span>{" "}
                    <br />
                    Ooops, The Page Doesn't Seem To Exit.
                  </h1>
                  <a
                    href="/"
                    target="_blank"
                    class="btn-a btn-a_color_black btn-a_size_large"
                    style={{
                      borderRadius: "5px",
                      transition: "all 0.25s ease 0s",
                      marginTop: "25px",
                    }}
                  >
                    Back To Home Page
                  </a>
                </div>
                <div className="right-block">
                  <img src="./assets/images/home/home.png" alt="Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
