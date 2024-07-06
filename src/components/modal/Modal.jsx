import React from "react";

const Modal = ({ children,setEdit }) => {
  return (
    <div className="container">
      <div className="bg_fon" onClick={() => setEdit(null)}></div>
      {children}
    </div>
  );
};

export default Modal;
