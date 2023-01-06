import React, { useState } from "react";

const SingleFAQ = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="faq">
        <div className="question" onClick={() => setShow(!show)}>
          <h6>{question}</h6>
          <i
            className={`aroowUpDown fa-solid ${
              show ? "fa-caret-up" : "fa-caret-down"
            }`}
          ></i>
        </div>
        {show && (
          <div className="answer">
            <p>
              <i
                className="fas fa-arrow-right"
                style={{ marginRight: "10px" }}
              ></i>
              {answer}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleFAQ;
