import React, { useState } from "react";

const SideNav = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();

    window.location.href = "/login";
  };

  return (
    <nav
      id=""
      className="fixed fade-in-1 top-0 z-10 h-screen animation-fade w-[100%] bg-white mt-[18%]"
      style={{ display: props.isShow ? "block" : "none" }}
    >
      <ul className="flex flex-col justify-between h-[90%] p-1 mt-5">
        <div>
          <li className=" p-3 text-slate-700 border border-gray-200 flex justify-between px-5 items-center">
            <p className="text-xl font-bold tracking-wide">Edit Profile</p>
            <i class="fa-solid fa-angle-right text-3xl"></i>
          </li>
        </div>
        <button
          className="p-4 bg-rose-400 text-white text-xl font-medium mb-[20%]"
          onClick={handleLogout}
        >
          Logout <i className="ml-2 fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </ul>
    </nav>
  );
};

export default SideNav;
