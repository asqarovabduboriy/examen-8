import React from "react";

const TwoReturn = ({text,title,titleTwo,textTwo,h2text,p2text,spantext,h2textt,p2textt}) => {
  return (
    <>
      <div className="container">
        <div className="text_wrapper_payment">
          <h1>{title}</h1>
          <div className="text_oplata_wrapper return">
            <h2>{titleTwo}</h2>
            <p>
             {text}
            </p>
            <span>{textTwo}</span>
            <h2>{h2text}</h2>
            <p>
              {p2text}
            </p>
            <span>{spantext}</span>
            <h2>{h2textt}</h2>
            <p>
              {p2textt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoReturn;
