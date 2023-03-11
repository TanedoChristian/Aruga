import React, { useState } from "react";
import SideNav from "./SideNav";

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);
  const handleShow = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex h-[6rem]  w-full justify-center">
      <div className="flex w-[90%]  justify-between items-center">
        <div className="flex flex-col gap-2 items-center">
          <h1
            className=" font-bold text-2xl tracking-wide"
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            <span className="text-sm font-medium">Welcome, </span> <br />{" "}
            Cherrie Pearl
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src={sessionStorage.getItem("userimg")}
            className="w-11 h-11 rounded-full"
          />
          <i
            class="fa-solid fa-bars-staggered text-xl font-bold text-rose-400"
            onClick={handleShow}
          ></i>
        </div>
      </div>

      <SideNav isShow={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Header;
