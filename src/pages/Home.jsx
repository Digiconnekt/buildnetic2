import React from "react";
import HomeFAQ from "../components/FAQ/HomeFAQ";
import GetInTouch from "../components/GetInTouch";
import HowToStart from "../components/HowToStart";
import Testimonial from "../components/Testimonial";
import "./HeroSection.css";

const Home = () => {
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
                    <span style={{ color: "#fff" }}>
                      {" "}
                      Compiling Your Ideas To
                    </span>{" "}
                    <br />
                    Generate Desired Solutions
                  </h1>
                </div>
                <div className="right-block">
                  <img src="./assets/images/home/home.png" alt="Home" />
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="section hidden-xs section-white section-2"
            id="slider"
            style={{ height: "650px" }}
          >
            <div className=" align-left">
              <div
                className="main-1 main-1-slider slide-like-a-pro"
                data-slide-like-a-pro='{"autoplayTimeout":"","firstRunDelay":"","autoplay":"false","timeline":"true","loop":"false","nav":"false"}'
                style={{ height: "450px" }}
              >
                <div className="pro-items">
                  <div className="main-1-item parallax-wrapper pro-item pro-item_active">
                    <div
                      className="parallax"
                      style={{
                        backgroundImage: "url(./assets/images/home3.png)",
                        backgroundSize: "cover",
                        backgroundAttachment: "local",
                        backgroundRepeat: "no-repeat",
                        height: "600px",
                        transform:
                          "translate3d(0px, -14px, 0px) scale3d(1, 1, 1)",
                      }}
                      data-parallax='{"speed":"0.75","fading":"false","min-fading":"","scale":"false","max-scale":""}'
                      data-w="1920"
                      data-h="600"
                    ></div>
                    <div className="container">
                      <div className="main-1-item__inner align-left">
                        <h2 className="main-1-item__title">
                          <span
                            className="main-1-item__title_part_1"
                            style={{ color: "#0a0039" }}
                          >
                            Compiling your ideas to
                          </span>{" "}
                          <span className="theme-color main-1-item__title_part_2">
                            Generate desired solutions
                          </span>{" "}
                          <span className="main-1-item__title_thin theme-color main-1-item__title_part_3"></span>
                        </h2>
                        <p className="main-1-item__subtitle"></p>
                      </div>
                    </div>
                    <div className="pro-item__timeline"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section hidden-sm hidden-md hidden-lg section-white section-2"
            id="slider-mob"
            style={{ height: "650px" }}
          >
            <div className=" align-left">
              <div
                className="main-1 main-1-slider slide-like-a-pro"
                data-slide-like-a-pro='{"autoplayTimeout":"","firstRunDelay":"","autoplay":"false","timeline":"true","loop":"false","nav":"false"}'
                style={{ height: "450px" }}
              >
                <div className="pro-items">
                  <div className="main-1-item parallax-wrapper pro-item pro-item_active">
                    <div
                      className="parallax"
                      style={{
                        backgroundImage:
                          "url(https://steadyrabbit.in/wp-content/uploads/2022/04/why-mob.jpg)",
                        backgroundSize: "cover",
                        backgroundAttachment: "local",
                        backgroundRepeat: "no-repeat",
                      }}
                      data-parallax='{"speed":"0.75","fading":"false","min-fading":"","scale":"false","max-scale":""}'
                      data-w="1920"
                      data-h="600"
                    ></div>
                    <div className="container">
                      <div className="main-1-item__inner align-left">
                        <h2 className="main-1-item__title">
                          <span
                            className="main-1-item__title_part_1"
                            style={{ color: "#0a0039" }}
                          >
                            Compiling your ideas to
                          </span>{" "}
                          <span className="theme-color main-1-item__title_part_2">
                            Generate desired solutions
                          </span>{" "}
                          <span className="main-1-item__title_thin theme-color main-1-item__title_part_3"></span>
                        </h2>
                        <p className="main-1-item__subtitle"></p>
                      </div>
                    </div>
                    <div className="pro-item__timeline"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* hero section end */}

          {/* we provide start */}
          <div className="section section-2" id="ENGINEERING TEAM">
            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h1
                    style={{
                      fontSize: "36px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#0075ff",
                      textAlign: "center",
                    }}
                  >
                    We provide a team of Technocrats for your Organization
                  </h1>
                  <hr
                    style={{
                      width: "140px",
                      color: "#0075FF",
                      height: "3px",
                      backgroundColor: "#0075FF",
                      borderWidth: "0px",
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-3">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Technical-Expertise.png"
                              alt="Product Engineering"
                            />
                          </noscript>
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Experts
                        </h5>
                        <div
                          className="features-item__text"
                          style={{ color: "#000" }}
                        >
                          <p>
                            Work with our certified experts, who have a wide
                            range of experience in technology stacks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Cost Effectiveness"
                            data-src="/assets/wp-content/uploads/2022/06/Cost-effectiveness.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Cost-effectiveness.png"
                              alt="Cost Effectiveness"
                            />
                          </noscript>
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Pocket-Friendly
                        </h5>
                        <div className="features-item__text">
                          <p style={{ color: "#000" }}>
                            Our team delivers marketing-led business solutions
                            from analysis to optimization all under a minimal
                            cover.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Transparency"
                            data-src="/assets/wp-content/uploads/2022/06/Workforce-Transparency.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Workforce-Transparency.png"
                              alt="Transparency"
                            />
                          </noscript>
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Transparency
                        </h5>
                        <div className="features-item__text">
                          <p style={{ color: "#000" }}>
                            Creating a competitive advantage from better
                            knowledge to define bold ambitions and maintaining
                            visibility throughout is what our technocrats aspire
                            for.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Strong Bench Strength"
                            data-src="/assets/wp-content/uploads/2022/06/Strong-Bench-Stregnth.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Strong-Bench-Stregnth.png"
                              alt="Strong Bench Strength"
                            />
                          </noscript>
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Availability
                        </h5>
                        <div className="features-item__text">
                          <p style={{ color: "#000" }}>
                            To ensure a quicker ramp-up and our capacity to meet
                            your needs, we maintain a robust bench.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* we provide end */}

          {/* choose the right start */}
          <div
            className="section section-white section-2 pt-0"
            id="engagement model"
          >
            <div className="container align-center">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h3
                    style={{
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: "#0075FF",
                    }}
                  >
                    Choose the right engagement model
                  </h3>
                  <hr
                    style={{
                      width: "140px",
                      float: "center",
                      color: "#0075FF",
                      height: "3px",
                      backgroundColor: "#0075FF",
                      borderWidth: "0px",
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div style={{ overflowX: "auto" }}>
                    <table>
                      <tbody style={{ color: "#000" }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                            }}
                            width="20%"
                          >
                             
                          </td>
                          <td
                            style={{
                              textAlign: "center",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                            }}
                            width="20%"
                          >
                            Offshore Dev Center
                          </td>
                          <td
                            style={{
                              textAlign: "center",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                            }}
                            width="20%"
                          >
                            Dedicated Engineers
                          </td>
                          <td
                            style={{
                              textAlign: "center",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                            }}
                            width="30%"
                          >
                            Project Team
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                            }}
                            width="25%"
                          >
                            Best for
                          </td>
                          <td
                            style={{ fontSize: "inherit", textAlign: "center" }}
                            width="25%"
                          >
                            Setting up a team as per your requirement
                          </td>
                          <td
                            style={{ fontSize: "inherit", textAlign: "center" }}
                            width="25%"
                          >
                            Scaling your in-house tech team
                          </td>
                          <td
                            style={{ fontSize: "inherit", textAlign: "center" }}
                            width="30%"
                          >
                            Hiring team for a defined project
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "inherit",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                            width="25%"
                          >
                            Team
                          </td>
                          <td
                            style={{ fontSize: "inherit", textAlign: "center" }}
                            width="25%"
                          >
                            Custom as per technical skill requirement
                          </td>
                          <td
                            style={{ fontSize: "inherit", textAlign: "center" }}
                            width="25%"
                          >
                            Custom as per technical skill requirement
                          </td>
                          <td
                            style={{ fontSize: "inherit", textAlign: "center" }}
                            width="30%"
                          >
                            Custom as per technical skill requirement
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "inherit",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                            width="25%"
                          >
                            Min engagement period
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            6 Months
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            3 Months
                          </td>
                          <td style={{ textAlign: "center" }} width="30%">
                            3 Months
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "inherit",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                            width="25%"
                          >
                            Flexibility / Replacement
                          </td>
                          <td style={{ textAlign: "center" }} colSpan="3">
                            100% flexibility to ramp up or ramp down the team,
                            Easy replacement
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "inherit",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                            width="25%"
                          >
                            Ramp up time
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            15-30 days
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            7-14 days
                          </td>
                          <td style={{ textAlign: "center" }} width="30%">
                            1-14 days
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "inherit",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                            width="25%"
                          >
                            Ramp down time
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            30 days
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            30 days
                          </td>
                          <td style={{ textAlign: "center" }} width="30%">
                            30 days
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "inherit",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                            width="25%"
                          >
                            Cost savings on US rates
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            Min 60%
                          </td>
                          <td style={{ textAlign: "center" }} width="25%">
                            Min 50%
                          </td>
                          <td style={{ textAlign: "center" }} width="30%">
                            Min 50%
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: "inherit",
                              background: "#caecff",
                              color: "#0a0039",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                            width="25%"
                          >
                            Support
                          </td>
                          <td style={{ textAlign: "center" }} colSpan="3">
                            24 X 7 Support - Email and Chat
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* choose the right end */}

          {/* two liner start */}
          <div className="section pt-0 pb-0" id="cta">
            <div className="align-left">
              <div
                className="s-get-it-2"
                style={{
                  paddingBottom: "50px",
                }}
              >
                <div className="container" style={{ textAlign: "center" }}>
                  <h5 className="s-get-it-2__title">
                    Build a website to help your businesses to grow wiser,
                    stronger, and faster.
                  </h5>
                  <h5
                    className="s-get-it-2__title"
                    style={{ color: "#0075ff" }}
                  >
                    Choose Buildnetic Choose Revolution.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* two liner end */}

          {/* tech we excel start */}
          <div className="section section-white section-2" id="technologies ">
            <div className="container align-center">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h1
                    style={{
                      fontSize: "36px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#0075FF",
                    }}
                  >
                    Technologies we excel at
                  </h1>
                  <hr
                    style={{
                      width: "140px",
                      float: "center",
                      color: "#0075FF",
                      height: "3px",
                      backgroundColor: "#0075FF",
                      borderWidth: "0px",
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "30px",
                      color: "#0a0039",
                      fontWeight: "bold",
                    }}
                  >
                    Web Development
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="Frontend"
                            data-src="/assets/wp-content/uploads/2022/06/Front-End.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Front-End.png"
                              alt="Frontend"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">Frontend</h5>
                        <div className="features-item__text">
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Languages
                            </strong>
                          </p>
                          <p>Java, HTML, CSS and JavaScript</p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Framework &amp; Library
                            </strong>
                          </p>
                          <p>
                            AngularJS, ReactJS, React Native, JQuery and Ionic
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="backendend"
                            data-src="/assets/wp-content/uploads/2022/06/Back-End.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Back-End.png"
                              alt="backendend"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">Backend</h5>
                        <div className="features-item__text">
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Languages
                            </strong>
                          </p>
                          <p>
                            PHP, Ruby, C#, C++, Python, JavaScript and Node.js
                          </p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Framework &amp; Library
                            </strong>
                          </p>
                          <p>
                            Django, Ruby on Rails, Springboot, Flask, Laravel,
                            ExpressJS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div className="fw-divider-line">
                    <hr
                      style={{
                        border: "1px solid #caecff",
                        background: "#caecff",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "30px",
                      color: "#0a0039",
                      fontWeight: "bold",
                    }}
                  >
                    Mobility Solutions
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="iOS"
                            data-src="/assets/wp-content/uploads/2022/06/iOS.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/iOS.png"
                              alt="iOS"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">
                          <a href="custom-ios-application-development/index.htm">
                            iOS
                          </a>
                        </h5>
                        <div className="features-item__text">
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Languages
                            </strong>
                          </p>
                          <p>Swift, Objective C and Swift UI</p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Framework &amp; Library
                            </strong>
                          </p>
                          <p>
                            Cocoa Pods, ReactJS, Firebase, Cloudkit and Mapkit
                          </p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Software
                            </strong>
                          </p>
                          <p>Xcode</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="Andriod"
                            data-src="/assets/wp-content/uploads/2022/06/Android.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Android.png"
                              alt="Andriod"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">
                          <a href="android-custom-application-development/index.htm">
                            Andriod
                          </a>
                        </h5>
                        <div className="features-item__text">
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Languages
                            </strong>
                          </p>
                          <p>Kotlin and Java</p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Framework &amp; Library
                            </strong>
                          </p>
                          <p>
                            Spring Rest Templates, Sencha Touch and Appcelerator
                            Titanium
                          </p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Software
                            </strong>
                          </p>
                          <p>
                            Andriod Studio, Greenrobot, Eventbus and Sweet Alert
                            Dialog
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="Cross platform"
                            data-src="/assets/wp-content/uploads/2022/06/Cross-Platform.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Cross-Platform.png"
                              alt="Cross platform"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">Cross Platform</h5>
                        <div className="features-item__text">
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Languages
                            </strong>
                          </p>
                          <p>Dart and JS/TS</p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Framework &amp; Library
                            </strong>
                          </p>
                          <p>Flutter, Ionic, React Native and Xamarin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div className="fw-divider-line">
                    <hr
                      style={{
                        border: "1px solid #caecff",
                        background: "#caecff",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="AI ML"
                            data-src="/assets/wp-content/uploads/2022/06/AI-ML-1.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/AI-ML-1.png"
                              alt="AI ML"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">AI &amp; ML</h5>
                        <div className="features-item__text">
                          <p>
                            NLP, Chatbots, Image Processing, Amazon, Textract,
                            ASR, OCR and KNN Algorithm
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="Database"
                            data-src="/assets/wp-content/uploads/2022/06/Database-1.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Database-1.png"
                              alt="Database"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">Database</h5>
                        <div className="features-item__text">
                          <p>
                            Microsoft SQL Server, MongoDB, MySQL, Oracle
                            PostgreSQL and DynamoDB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="DevOps"
                            data-src="/assets/wp-content/uploads/2022/06/DevOps-1.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/DevOps-1.png"
                              alt="DevOps"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">DevOps</h5>
                        <div className="features-item__text">
                          <p>
                            AWS, Google Cloud, Docker, Jenkins and Kubernetes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div className="fw-divider-line">
                    <hr
                      style={{
                        border: "1px solid #caecff",
                        background: "#caecff",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="/assets/wp-content/uploads/2022/06/Testing-Automation.png"
                            data-src="/assets/wp-content/uploads/2022/06/Testing-Automation.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Testing-Automation.png"
                              alt="/assets/wp-content/uploads/2022/06/Testing-Automation.png"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">Testing</h5>
                        <div className="features-item__text">
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Automation
                            </strong>
                          </p>
                          <p>Appium, selenium and Mocha</p>
                          <p>
                            <strong
                              style={{
                                color: "#0a0039",
                              }}
                            >
                              Manual
                            </strong>
                          </p>
                          <p>Black box testing and White box testing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item">
                        <p>
                          <img
                            alt="Tools"
                            data-src="/assets/wp-content/uploads/2022/06/Tools-1.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              className="features-item__icon"
                              src="wp-content/uploads/2022/06/Tools-1.png"
                              alt="Tools"
                            />
                          </noscript>
                        </p>
                        <h5 className="features-item__title">Tools</h5>
                        <div className="features-item__text">
                          <p>
                            Tesseract, PowerBI, Qlikview, MS Excel, BIRT,
                            Hibernate/ NHibernate and GitHub
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4"></div>
              </div>
            </div>
          </div>
          {/* tech we excel end */}

          {/* get in touch start */}
          <GetInTouch />
          {/* get in touch end */}

          {/* how to start?? start */}
          <div className="section section-white section-2 pb-0" id="Onboarding">
            <div className="align-center">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <h1
                        style={{
                          fontSize: "36px",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "#0075ff",
                        }}
                      >
                        How to start?
                      </h1>
                      <hr
                        style={{
                          width: "140px",
                          float: "center",
                          color: "#0075FF",
                          height: "3px",
                          backgroundColor: "#0075FF",
                          borderWidth: "0px",
                        }}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "20px",
                          color: "#0a0039",
                        }}
                      >
                        Just three simple steps!
                      </p>
                    </div>
                  </div>

                  <HowToStart />
                </div>
              </div>
            </div>
          </div>
          {/* how to start?? end */}

          {/* FAQ start */}
          <section className="section section-white section-2" id="FAQs">
            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h3
                    className="section__title"
                    style={{
                      color: "#0075ff",
                      textTransform: "uppercase",
                    }}
                  >
                    Frequently Asked Questions
                  </h3>
                </div>
              </div>
            </div>

            <div className="container align-left">
              {/* <div className="row accordion">
                <div className="col-xs-12 col-sm-12">
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    How can Steady Rabbit’s staff augmentation services help my
                    business?
                  </div>
                  <div className="accordion__content">
                    <p>
                      Lack of access to good talent can often be a hindrance to
                      the growth of your business. With Steady Rabbit’s staff
                      augmentation services, you can tap into our large pool of
                      highly experienced developers. Further, staff augmentation
                      is especially suitable for technology startups seeking to
                      scale up quickly, in addition to being a flexible option
                      for supplementing your team for short-term projects.
                      Through staff augmentation, it is possible for you to
                      access the best talent at significantly lower costs and
                      complete the recruitment process in a much shorter time
                      period compared to direct hiring.
                    </p>
                  </div>
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    What kind of professional experience do your developers
                    have?
                  </div>
                  <div className="accordion__content">
                    <p>
                      Our developers have an average experience of more than 5
                      years which allows you to leverage their competence,
                      skills and knowledge. Our engineering team has worked on
                      several complex projects of all business sizes and types.
                      Our engineers always keep themselves updated with the
                      latest technology trends and build advanced business
                      solutions. Due to this, you can be assured of always
                      getting timely deliverables without compromising the
                      quality of the work.
                    </p>
                  </div>
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    How long does it take to on-board a team?
                  </div>
                  <div className="accordion__content">
                    <p>
                      Due to our exceptional bench strength, we are able to
                      mobilise resources in a short span of time. Typically 15 –
                      30 days, it may vary based on your requirements. – and We
                      ensure that your team starts contributing to your business
                      as quickly as possible.
                    </p>
                  </div>
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    How long is the ramp down period?
                  </div>
                  <div className="accordion__content">
                    <p>
                      As a project nears completion, there is an expected
                      decline in workload and this phase is known as the ramp
                      down period. At Steady Rabbit, we provide flexibility by
                      offering shorter ramp down times, typically lasting
                      between 30-60 days, depending on the kind of staff
                      augmentation services you choose to avail.
                    </p>
                  </div>
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    What are the approximate costs of your staff augmentation
                    services?
                  </div>
                  <div className="accordion__content">
                    <p>
                      Our goal at Steady Rabbit is to provide your business with
                      the best of talent at competitive prices. The hourly rates
                      starting as low as $15. Junior developer will cost you
                      around $2,400/month. For an experienced resource with 4
                      years + ex, will cost $3000 per month. We assure you
                      minimum 50% savings – in some cases, even up to 60% – on
                      hiring costs relative to developers of similar calibre in
                      the USA. Contact us with your requirements and we will get
                      back to you with a detailed quote within 24 hours.
                    </p>
                  </div>
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    How does the hiring process work?
                  </div>
                  <div className="accordion__content">
                    <p>
                      The hiring process of our staff augmentation services is
                      divided into three stages.
                      <br />
                      <i
                        className="fa fa-circle"
                        style={{ fontSize: "10px", color: "#55555" }}
                      ></i>
                       In the first stage, the client needs to establish the
                      level of experience, abilities and qualifications of the
                      developers required, as well as the number of developers
                      needed. This stage can be considered similar to creating a
                      comprehensive job description.
                      <br />
                      <i
                        className="fa fa-circle"
                        style={{ fontSize: "10px", color: "#55555" }}
                      ></i>
                       The second stage involves combing through our database
                      for developers that match the skills and profile that the
                      client is looking for. We create and share a shortlist of
                      candidates that suits your requirements.
                      <br />
                      <i
                        className="fa fa-circle"
                        style={{ fontSize: "10px", color: "#55555" }}
                      ></i>
                       The final stage involves interviews with the candidates
                      and after the approval of the client, the recruitment
                      process is finalized. After completion of contractual
                      formalities, the hired engineers start working with you as
                      per the mutual agreed date.
                    </p>
                    <p>
                      In rare cases if in case you are not satisfied with a
                      specific engineer, we provide replacement flexibility
                      within a period of 45 days. The hiring process can be
                      completed in 15-30 days, providing an advantage over
                      on-site company hiring which often takes several months.
                    </p>
                  </div>
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    What are the key technology stacks that you serve?
                  </div>
                  <div className="accordion__content">
                    <p>
                      Our engineers specialize in Frontend and UX ( React.js ,
                      React Native, Vue, Angular, Flutter, Android , iOS etc.),
                      Backend ( Java , Python , Node.js , PHP), Cloud &amp;
                      DevOps (AWS, Jenkins, Docker etc.) and more. Thus, Steady
                      Rabbit’s staff augmentation services help you customize
                      your team based on your business requirements.
                    </p>
                  </div>
                  <div
                    className="accordion__title ico-110 fx"
                    data-animation-name="fadeInUp"
                    data-animation-duration=".8s"
                    data-animation-delay="0.2s"
                    style={{
                      color: "#0a0039",
                    }}
                  >
                    How will I manage a remote team based in India?
                  </div>
                  <div className="accordion__content">
                    <p>
                      Remote management across different time zones can seem
                      like a daunting task but at Steady Rabbit, we dedicate
                      ourselves to making sure that the process is as smooth and
                      efficient. We ensure that our team of developers has an
                      overlapping hours so you can have a daily scrum meeting.
                      You can keep tabs on deliverables through regular
                      performance monitoring. All the developers are fluent in
                      English so you will have no trouble in communication.
                      Further, we provide you with 24x7 support services to look
                      into any issues you might be facing with utmost immediacy.
                    </p>
                  </div>
                </div>
              </div> */}

              <HomeFAQ />
            </div>
          </section>
          {/* FAQ end */}

          {/* testimonial start */}
          <section
            className="section section-lightgray section-2"
            id="testimonials"
          >
            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h3
                    className="section__title"
                    style={{
                      color: "#0075ff",
                      textTransform: "uppercase",
                    }}
                  >
                    Testimonials
                  </h3>
                </div>
              </div>
            </div>

            <div className="container align-left">
              <Testimonial />
            </div>
          </section>
          {/* testimonial end */}

          {/* success stories start */}
          <section className="section section-white section-2 pb-0">
            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h3
                    className="section__title"
                    style={{
                      color: "#0075ff",
                      textTransform: "uppercase",
                    }}
                  >
                    Success Stories
                  </h3>
                </div>
              </div>
            </div>

            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-3 equal-cols">
                  <div className="team-item">
                    <div className="team-item__wrap">
                      <img
                        alt="OneAD"
                        data-src="//steadyrabbit.in/wp-content/uploads/2021/01/Group-63109.jpg"
                        className="team-item__img lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      />
                      <noscript>
                        <img
                          src="wp-content/uploads/2021/01/Group-63109.jpg"
                          alt="OneAD"
                          className="team-item__img"
                        />
                      </noscript>
                      <div className="team-item-social">
                        <a
                          className="team-item-social__link"
                          target="_blank"
                          href="onead/index.htm"
                        >
                          <img
                            alt="readmore"
                            data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                            className="team-item-social__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              alt="readmore"
                              data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                              className="team-item-social__icon lazyload"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            />
                            <noscript>
                              <img
                                alt="readmore"
                                data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                className="team-item-social__icon lazyload"
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              />
                              <noscript>
                                <img
                                  alt="readmore"
                                  data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                  className="team-item-social__icon lazyload"
                                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                  <img
                                    src="wp-content/uploads/2021/01/readmore.png"
                                    className="team-item-social__icon"
                                    alt="readmore"
                                  />
                                </noscript>
                              </noscript>
                            </noscript>
                          </noscript>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-details">
                      <div
                        className="team-item-details__name"
                        style={{ color: "#0a0039" }}
                      >
                        Mobile Gaming Platform
                      </div>
                      <div className="team-item-details__position">
                        App loved by 30 Mn users
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 equal-cols">
                  <div className="team-item">
                    <div className="team-item__wrap">
                      <img
                        alt="Event Creative Platform"
                        data-src="//steadyrabbit.in/wp-content/uploads/2022/01/Yogems.png"
                        className="team-item__img lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      />
                      <noscript>
                        <img
                          src="wp-content/uploads/2022/01/Yogems.png"
                          alt="Event Creative Platform"
                          className="team-item__img"
                        />
                      </noscript>
                      <div className="team-item-social">
                        <a
                          className="team-item-social__link"
                          target="_blank"
                          href="yogems/index.htm"
                        >
                          <img
                            alt="readmore"
                            data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                            className="team-item-social__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              alt="readmore"
                              data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                              className="team-item-social__icon lazyload"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            />
                            <noscript>
                              <img
                                alt="readmore"
                                data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                className="team-item-social__icon lazyload"
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              />
                              <noscript>
                                <img
                                  alt="readmore"
                                  data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                  className="team-item-social__icon lazyload"
                                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                  <img
                                    src="wp-content/uploads/2021/01/readmore.png"
                                    className="team-item-social__icon"
                                    alt="readmore"
                                  />
                                </noscript>
                              </noscript>
                            </noscript>
                          </noscript>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-details">
                      <div
                        className="team-item-details__name"
                        style={{ color: "#0a0039" }}
                      >
                        Event Creative Platform
                      </div>
                      <div className="team-item-details__position">
                        Arts, Craft, Photography &amp; Music
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 equal-cols">
                  <div className="team-item">
                    <div className="team-item__wrap">
                      <img
                        alt="Group Shopping App"
                        data-src="//steadyrabbit.in/wp-content/uploads/2022/01/MALL91.png"
                        className="team-item__img lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      />
                      <noscript>
                        <img
                          src="wp-content/uploads/2022/01/MALL91.png"
                          alt="Group Shopping App"
                          className="team-item__img"
                        />
                      </noscript>
                      <div className="team-item-social">
                        <a
                          className="team-item-social__link"
                          target="_blank"
                          href="mall91/index.htm"
                        >
                          <img
                            alt="readmore"
                            data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                            className="team-item-social__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              alt="readmore"
                              data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                              className="team-item-social__icon lazyload"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            />
                            <noscript>
                              <img
                                alt="readmore"
                                data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                className="team-item-social__icon lazyload"
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              />
                              <noscript>
                                <img
                                  alt="readmore"
                                  data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                  className="team-item-social__icon lazyload"
                                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                  <img
                                    src="wp-content/uploads/2021/01/readmore.png"
                                    className="team-item-social__icon"
                                    alt="readmore"
                                  />
                                </noscript>
                              </noscript>
                            </noscript>
                          </noscript>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-details">
                      <div
                        className="team-item-details__name"
                        style={{ color: "#0a0039" }}
                      >
                        Group Shopping App
                      </div>
                      <div className="team-item-details__position">
                        Built for the next 100 Cr. Indian users
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 equal-cols">
                  <div className="team-item">
                    <div className="team-item__wrap">
                      <img
                        alt="Real Estate App"
                        data-src="//steadyrabbit.in/wp-content/uploads/2022/01/UAV-Real-Estate.png"
                        className="team-item__img lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      />
                      <noscript>
                        <img
                          src="wp-content/uploads/2022/01/UAV-Real-Estate.png"
                          alt="Real Estate App"
                          className="team-item__img"
                        />
                      </noscript>
                      <div className="team-item-social">
                        <a
                          className="team-item-social__link"
                          target="_blank"
                          href="uav-real-estate/index.htm"
                        >
                          <img
                            alt="readmore"
                            data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                            className="team-item-social__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            <img
                              alt="readmore"
                              data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                              className="team-item-social__icon lazyload"
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            />
                            <noscript>
                              <img
                                alt="readmore"
                                data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                className="team-item-social__icon lazyload"
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              />
                              <noscript>
                                <img
                                  alt="readmore"
                                  data-src="https://steadyrabbit.in/wp-content/uploads/2021/01/readmore.png"
                                  className="team-item-social__icon lazyload"
                                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                  <img
                                    src="wp-content/uploads/2021/01/readmore.png"
                                    className="team-item-social__icon"
                                    alt="readmore"
                                  />
                                </noscript>
                              </noscript>
                            </noscript>
                          </noscript>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-details">
                      <div
                        className="team-item-details__name"
                        style={{ color: "#0a0039" }}
                      >
                        Real Estate App
                      </div>
                      <div className="team-item-details__position">
                        Search homes remotely
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* success stories end */}

          {/* awards start */}
          {/* <section className="section section-lightgray section-2" id="awards">
            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h3
                    className="section__title"
                    style={{ color: "#0075ff", textTransform: "uppercase" }}
                  >
                    Awards &amp; Recognitions
                  </h3>
                </div>
              </div>
            </div>

            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-3 equal-cols no-padding">
                  <p>
                    <a href="#" target="_blank" rel="noopener">
                      <img
                        alt=""
                        width="250"
                        height="150"
                        data-src="/assets/wp-content/uploads/2021/03/Cluth2.png"
                        className="aligncenter size-full wp-image-5092 lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      />
                      <noscript>
                        <img
                          className="aligncenter size-full wp-image-5092"
                          src="./assets/wp-content/uploads/2021/03/Cluth2.png"
                          alt=""
                          width="250"
                          height="150"
                        />
                      </noscript>
                    </a>
                  </p>
                  <p>
                    <img
                      alt=""
                      width="250"
                      height="150"
                      data-src="/assets/wp-content/uploads/2021/03/ManiestwebDev.png"
                      className="aligncenter size-full wp-image-5094 lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    />
                    <noscript>
                      <img
                        className="aligncenter size-full wp-image-5094"
                        src="./assets/wp-content/uploads/2021/03/ManiestwebDev.png"
                        alt=""
                        width="250"
                        height="150"
                      />
                    </noscript>
                  </p>
                </div>
                <div className="col-xs-12 col-sm-3 equal-cols no-padding">
                  <p>
                    <a href="#" target="_blank" rel="noopener">
                      <img
                        alt=""
                        width="250"
                        height="150"
                        data-src="/assets/wp-content/uploads/2021/03/GoodFirm.png"
                        className="aligncenter size-full wp-image-5093 lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      />
                      <noscript>
                        <img
                          className="aligncenter size-full wp-image-5093"
                          src="./assets/wp-content/uploads/2021/03/GoodFirm.png"
                          alt=""
                          width="250"
                          height="150"
                        />
                      </noscript>
                    </a>
                  </p>
                  <p>
                    <a href="#" target="_blank" rel="noopener">
                      <img
                        alt=""
                        width="250"
                        height="150"
                        data-src="https://steadyrabbit.in/wp-content/uploads/2021/03/LetsVenture.png"
                        className="aligncenter size-full wp-image-5095 lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      />
                      <noscript>
                        <img
                          className="aligncenter size-full wp-image-5095"
                          src="./assets/wp-content/uploads/2021/03/LetsVenture.png"
                          alt=""
                          width="250"
                          height="150"
                        />
                      </noscript>
                    </a>
                  </p>
                </div>
                <div className="col-xs-12 col-sm-6 equal-cols no-padding">
                  <img
                    alt="Award"
                    data-src="./assets/images/home/award.png"
                    className="lazyload"
                    src="./assets/images/home/award.png"
                  />
                  <noscript>
                    <img src="./assets/images/home/award.png" alt="award" />
                  </noscript>
                </div>
              </div>
            </div>
          </section> */}
          {/* awards end */}

          {/* our clients start */}
          {/* <div className="section  section-2" id="ENGINEERING TEAM">
            <div className="container align-left">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <h1
                    style={{
                      fontSize: "36px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#0075ff",
                      textAlign: "center",
                    }}
                  >
                    Our Clients
                  </h1>
                  <hr
                    style={{
                      width: "140px",
                      color: "#0075FF",
                      height: "3px",
                      backgroundColor: "#0075FF",
                      borderWidth: "0px",
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 1
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 2
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 3
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 4
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 5
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 6
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 7
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 8
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 9
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 10
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 11
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-2">
                  <div className="features-item align-left">
                    <div className="features-item__text">
                      <div className="features-item align-center">
                        <p>
                          <img
                            alt="Product Engineering"
                            data-src="/assets/wp-content/uploads/2022/06/Technical-Expertise.png"
                            className="features-item__icon lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                        </p>
                        <h5
                          className="features-item__title"
                          style={{ color: "#0a0039" }}
                        >
                          Client 12
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* our clients end */}

          {/* get in touch start */}
          <div className="section pt-0 pb-0" id="cta">
            <div className="align-left">
              <div className="s-get-it-2" style={{ paddingBottom: "35px" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 align-middle">
                      <h5 className="s-get-it-2__title">
                        Get In Touch <br />{" "}
                        <span style={{ color: "#0075ff" }}>
                          {" "}
                          Be a part of the solution!
                        </span>
                      </h5>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 align-middle">
                      <a
                        href="contact-us/index.htm"
                        target="_blank"
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
          {/* get in touch end */}
        </div>
      </div>
    </>
  );
};

export default Home;
