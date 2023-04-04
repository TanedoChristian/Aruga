import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import SetUp from "../Setup";

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [user, setUser] = useState();

  let data = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    setUser(data);
  }, []);

  const handleShow = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex flex-col gap-2  p-3">
      <nav className="w-full  justify-center flex  bg-gradient-to-br from-rose-300 via-rose-400 to-rose-500 rounded-2xl shadow-md">
        <SideNav isShow={showNav} setShowNav={setShowNav} />
        <div className="flex justify-between items-center  w-[98%] p-2  gap-3">
          <div className="flex items-center gap-2 ">
            <div className="w-full">
              <img
                src={`${SetUp.SERVER_URL()}/${sessionStorage.getItem(
                  "userimg"
                )}`}
                className="h-11 w-12 rounded-full object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-5 w-full justify-end">
            <a
              href="/dashboard"
              className="self-center text-2xl font-semibold whitespace-nowrap text-white tracking-wider ml-2 w-full text-center"
              style={{ fontFamily: "Poppins" }}
            >
              Aruga
            </a>
            <i
              className="fa-solid fa-bars-staggered text-xl font-bold text-white"
              onClick={handleShow}
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
