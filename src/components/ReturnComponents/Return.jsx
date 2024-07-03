import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Return = ({ title, btn, path,disabled }) => {
  const { pathname } = useLocation();

  if (pathname.includes("Блог") ) {
    return <></>;
  }

 
  return (
    <>
      <div className="container">
        <div className="katolg_wrapper">
          <h2>{title}</h2>
          {pathname.includes("AllProduct") ? (
            <></>
          ) : (
            <Link to={path}>
              <button disabled={false}>
                {btn} <MdArrowRightAlt />{" "}
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Return;
