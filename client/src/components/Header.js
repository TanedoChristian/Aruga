import React, { useState } from "react";
import SideNav from "./SideNav";

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);
  const handleShow = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex flex-col gap-2 bg-white p-3">
      <nav class="w-full  justify-center flex  bg-gray-100 rounded-2xl">
        <div class="flex justify-between items-center  w-[98%] p-2  gap-3">
          <div class="flex items-center gap-2 ">
            <div className="w-full">
              <img
                src={sessionStorage.getItem("userimg")}
                className="h-11 w-12 rounded-full object-cover shadow-sm"
              />
            </div>
          </div>

          <div class="flex items-center gap-5 w-full justify-end">
            <a
              href="/dashboard"
              class="self-center text-2xl font-semibold whitespace-nowrap text-rose-400 tracking-wider ml-2 w-full text-center"
              style={{ fontFamily: "Poppins" }}
            >
              Aruga
            </a>
            <i
              class="fa-solid fa-bars-staggered text-xl font-bold text-rose-400"
              onClick={handleShow}
            ></i>
          </div>
        </div>
      </nav>

      <SideNav isShow={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Header;
