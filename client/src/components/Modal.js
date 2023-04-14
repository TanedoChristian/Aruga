import React from "react";

const Modal = (props) => {
  return (
    <div
      className="h-screen  w-full fixed btest"
      style={{
        display: props.isShowModal ? "block" : "none",
      }}
    >
      <div className="flex w-full h-screen  items-center">{props.children}</div>
    </div>
  );
};
export default Modal;
