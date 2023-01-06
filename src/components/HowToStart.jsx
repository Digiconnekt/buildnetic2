import React, { useState } from "react";
import "./HowToStart.css";

const HowToStart = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="mainBlock">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Demand
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Solution
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Launch
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>
            Submit your requirements in terms of project definition, project
            domain, tech stack, number of team members, and all that you need in
            your platter.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
            We analyze, understand, and then handpick the most qualified
            candidates for you who work on singular campaigns to wide-reaching
            transformation programs.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>
            When your demand meets the solution you are ready to launch into
            your digital revolution. Yes, it starts!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToStart;
