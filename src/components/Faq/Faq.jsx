import React, { useState } from "react";
import "./Faq.css";
import { assets } from "../../assets/assets";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const data = [
    {
      ques: "Do you offer freelancers?",
      ans: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptas praesentium cumque facilis ducimus vero, libero necessitatibus ratione vel magni.",
    },
    {
      ques: "What’s the guarantee that I will be satisfied with the hired talent?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem eligendi suscipit dignissimos laudantium, saepe obcaecati asperiores. Consectetur, doloribus quidem.",
    },
    {
      ques: "Can I hire multiple talents at once?",
      ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      ques: "Why should I not go to an agency directly?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem eligendi suscipit dignissimos laudantium, saepe obcaecati asperiores. Consectetur, doloribus quidem.",
    },
    {
      ques: "Who can help me pick a right skillset and duration from me?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem eligendi suscipit dignissimos laudantium, saepe obcaecati asperiores. Consectetur, doloribus quidem.",
    },
  ];

  return (
    <div className="faq-section">
      <img src={assets.FaqImg} alt="" />
      <div className="left">
        <p className="special-font">What's on your mind</p>
        <h1>Ask Questions</h1>
      </div>
      <div className="right">
        <div className="faq-list">
          {data.map((faq, index) => (
            <div className="faq" key={index}>
              <div className="ques" onClick={() => toggle(index)}>
                <h2>{faq.ques}</h2>
                <span>
                  {selected === index ? (
                    <img src={assets.MinusImg} alt="" />
                  ) : (
                    <img src={assets.PlusImg} alt="" />
                  )}
                </span>
              </div>
              <div className={selected === index ? "ans show" : "ans"}>
                {faq.ans}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
