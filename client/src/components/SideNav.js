import React, { useState } from "react";

const SideNav = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav
      id=""
      className="fixed  top-0 z-10 h-screen animation-fade w-[100%] bg-white  w3-animate-right test "
      style={{ display: props.isShow ? "block" : "none" }}
    >
      <i
        className="fa-solid fa-arrow-left ml-[5%] mt-[1rem] text-xl font-bold"
        onClick={() => props.setShowNav(!props.isShow)}
      ></i>

      <ul className="flex flex-col justify-between h-[90%] p-1 mt-5">
        <div>
          <li className=" p-3 text-slate-700   px-5 items-center border-b border-gray-300">
            <a href="/edit-profile" className="flex justify-between">
              <p
                className="text-xl text-slate-700 tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Edit Profile
              </p>
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </a>
          </li>

          <li className=" p-3 text-slate-700   px-5 items-center">
            <a href="/edit-profile" className="flex justify-between">
              <p
                className="text-xl  tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Change Password
              </p>
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </a>
          </li>

          <li className=" p-3 text-slate-700   px-5 items-center border-t border-gray-300">
            <a href={`user-blog`} className="flex justify-between">
              <p
                className="text-xl text-slate-700 tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                My Blog
              </p>
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </a>
          </li>

          <li className=" p-3 text-slate-700   px-5 items-center border-t border-gray-200">
            <a href="/edit-profile" className="flex justify-between">
              <p
                className="text-xl text-slate-700 tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Job Posted
              </p>
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </a>
          </li>
        </div>
        <button
          className="p-4 fixed  bottom-2 w-full bg-rose-500 text-white text-xl font-medium test"
          onClick={handleLogout}
        >
          Logout <i className="ml-2 fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </ul>
    </nav>
  );
};

export default SideNav;
