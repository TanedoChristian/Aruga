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
    <div className="flex justify-center gap-2  relative  h-[8vh] bg-rose-400  items-center">
      <nav className="w-full   flex  fixed bg-rose-400  shadow-sm">
        <SideNav isShow={showNav} setShowNav={setShowNav} />
        <div className="flex justify-between items-center  w-[98%] p-2  gap-3">
          <div className="flex items-center gap-2 ">
            <div className="w-full">
              <a
                href="/dashboard"
                className="text-3xl font-bold  uppercase ml-2  w-full text-center text-white"
              >
                Aruga
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full justify-end">
            <img
              src={`${SetUp.SERVER_URL()}/${sessionStorage.getItem("userimg")}`}
              className="h-10 w-10 rounded-full object-cover shadow-sm"
            />
            <i
              className="fa-solid fa-bars-staggered text-2xl font-bold text-white"
              onClick={handleShow}
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
