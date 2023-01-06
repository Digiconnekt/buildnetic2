import React from "react";
import "./FAQ.css";
import SingleFAQ from "./SingleFAQ";

const HomeFAQ = () => {
  return (
    <>
      <SingleFAQ
        question="How can Steady Rabbit’s staff augmentation services help my business?"
        answer="Lack of access to good talent can often be a hindrance to the growth of your business. With Steady Rabbit’s staff augmentation services, you can tap into our large pool of highly experienced developers. Further, staff augmentation is especially suitable for technology startups seeking to scale up quickly, in addition to being a flexible option for supplementing your team for short-term projects. Through staff augmentation, it is possible for you to access the best talent at significantly lower costs and complete the recruitment process in a much shorter time period compared to direct hiring."
      />
      <SingleFAQ
        question="What kind of professional experience do your developers have?"
        answer="Our developers have an average experience of more than 5 years which allows you to leverage their competence, skills and knowledge. Our engineering team has worked on several complex projects of all business sizes and types. Our engineers always keep themselves updated with the latest technology trends and build advanced business solutions. Due to this, you can be assured of always getting timely deliverables without compromising the quality of the work."
      />
    </>
  );
};

export default HomeFAQ;
