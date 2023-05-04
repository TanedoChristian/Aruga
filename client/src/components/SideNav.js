import React, { useState } from "react";

const SideNav = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav
      id=""
      className="fixed  top-0 z-50 h-screen animation-fade w-[100%] bg-rose-400 text-white  w3-animate-right"
      style={{ display: props.isShow ? "block" : "none" }}
    >
      <i
        className="fa-solid fa-arrow-left ml-[5%] mt-[1rem] text-xl font-bold"
        onClick={() => props.setShowNav(!props.isShow)}
      ></i>

      <ul className="flex flex-col justify-between h-[90%] p-1 mt-5">
        <div>
          {sessionStorage.getItem("type") === "babysitter" ? (
            <li className=" p-3 text-white   px-5 items-center ">
              <a
                href={`/user-details?userid=${sessionStorage.getItem(
                  "userid"
                )}`}
                className="flex justify-between"
              >
                <p
                  className="text-xl text-white tracking-wide"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  My Profile
                </p>
                <i className="fa-solid fa-angle-right text-3xl"></i>
              </a>
            </li>
          ) : (
            ""
          )}

          <li className=" p-3 text-white   px-5 items-center ">
            <a href="/edit-profile" className="flex justify-between">
              <p
                className="text-xl text-white tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Edit Profile
              </p>
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </a>
          </li>

          <li className=" p-3 text-white   px-5 items-center">
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

          <li className=" p-3 text-white   px-5 items-center">
            <a
              href={`/subscription?userid=${sessionStorage.getItem("userid")}`}
              className="flex justify-between"
            >
              <p
                className="text-xl  tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Subscription
              </p>
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </a>
          </li>

          <li className=" p-3 text-white   px-5 items-center ">
            <a href={`user-blog`} className="flex justify-between">
              <p
                className="text-xl text-white tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                My Blog
              </p>
              <i className="fa-solid fa-angle-right text-3xl"></i>
            </a>
          </li>
          {sessionStorage.getItem("type") === "parent" ? (
            <li className=" p-3 text-white   px-5 items-center ">
              <a href="/user-jobs" className="flex justify-between">
                <p
                  className="text-xl text-white tracking-wide"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Job Posted
                </p>
                <i className="fa-solid fa-angle-right text-3xl"></i>
              </a>
            </li>
          ) : (
            <li className=" p-3 text-white   px-5 items-center ">
              <a href="/resume/builder" className="flex justify-between">
                <p
                  className="text-xl text-white tracking-wide"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Create Resume
                </p>
                <i className="fa-solid fa-angle-right text-3xl"></i>
              </a>
            </li>
          )}

          {sessionStorage.getItem("type") != "parent" ? (
            <li className=" p-3 text-white   px-5 items-center ">
              <a href="/job-details" className="flex justify-between">
                <p
                  className="text-xl text-white tracking-wide"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Job Applied
                </p>
                <i className="fa-solid fa-angle-right text-3xl"></i>
              </a>
            </li>
          ) : (
            ""
          )}

          <li className=" p-3 text-white   px-5  border-t border-gray-200 mt-20 flex items-center">
            <button className="text-xl" onClick={handleLogout}>
              Logout
              <i className="ml-2 text-normal fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default SideNav;
