import React from "react";

const Modal = (props) => {
  return (
    <div
      className="h-screen  w-full fixed opacity-60 bg-black"
      style={{ display: "none" }}
    >
      <div className="flex w-full h-screen  items-center">{props.children}</div>
    </div>
  );
};
export default Modal;
