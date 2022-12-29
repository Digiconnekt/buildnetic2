import React from "react";

const StickyWhatsapp = () => {
  return (
    <>
      <div
        className="mystickyelements-fixed mystickyelements-position-right mystickyelements-position-screen-center mystickyelements-position-mobile-bottom mystickyelements-on-click mystickyelements-size-medium mystickyelements-mobile-size-medium mystickyelements-entry-effect-slide-in mystickyelements-templates-default mystickyelements-bottom-social-channel-0 entry-effect"
        style={{ transition: "all 0s ease 0s" }}
      >
        <div className="mystickyelement-lists-wrap">
          <ul className="mystickyelements-lists mysticky">
            <li className="mystickyelements-minimize ">
              <span
                className="mystickyelements-minimize minimize-position-right minimize-position-mobile-bottom"
                style={{ background: "#1a1d24" }}
              >
                →{" "}
              </span>
            </li>

            <li
              id="mystickyelements-social-whatsapp"
              className="mystickyelements-social-icon-li mystickyelements-social-whatsapp  element-desktop-on element-mobile-on"
            >
              <style></style>

              <span
                className="mystickyelements-social-icon social-whatsapp social-custom"
                style={{
                  background: "rgb(38, 211, 103)",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=91-9310070057&amp;text=Hi,%20I%20am%20looking%20for%20IT%20services%20provider,%20please%20contact%20me."
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </span>
              <span
                className="mystickyelements-social-text "
                style={{ background: "#26D367" }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=91-9310070057&amp;text=Hi,%20I%20am%20looking%20for%20IT%20services%20provider,%20please%20contact%20me."
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp{" "}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StickyWhatsapp;
