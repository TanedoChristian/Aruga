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
          <li className=" p-3 text-white   px-5 items-center ">
            <a
              href={`/user-details?userid=${sessionStorage.getItem("userid")}`}
              className="flex gap-2 items-center"
            >
              <i class="fa-solid fa-user"></i>
              <p
                className="text-lg text-white tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                My Profile
              </p>
            </a>
          </li>

          <li className=" p-3 text-white   px-5 items-center ">
            <a href="/edit-profile" className="flex gap-2 items-center">
              <i class="fa-solid fa-pencil"></i>
              <p
                className="text-lg text-white tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Edit Profile
              </p>
            </a>
          </li>
          <li className=" p-3 text-white   px-5 items-center ">
            <a href="/inbox" className="flex gap-2 items-center">
              <i class="fa-regular fa-envelope"></i>
              <p
                className="text-lg text-white tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Inbox
              </p>
            </a>
          </li>
          <li className=" p-3 text-white   px-5 items-center">
            <a
              href={`/subscription?userid=${sessionStorage.getItem("userid")}`}
              className="flex gap-2 items-center"
            >
              <i class="fa-solid fa-star"></i>
              <p
                className="text-lg  tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Subscription
              </p>
            </a>
          </li>
          <li className=" p-3 text-white   px-5 items-center ">
            <a href={`user-blog`} className="flex gap-2 items-center">
              <i className={`fa-solid fa-pen-to-square`}></i>
              <p
                className="text-lg text-white tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                My Blog
              </p>
            </a>
          </li>
          {sessionStorage.getItem("type") === "parent" ? (
            <li className=" p-3 text-white   px-5 items-center ">
              <a href="/user-jobs" className="flex gap-2 items-center">
                <i class="fa-solid fa-note-sticky"></i>
                <p
                  className="text-lg text-white tracking-wide"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Job Posted
                </p>
              </a>
            </li>
          ) : (
            <li className=" p-3 text-white   px-5 items-center ">
              <a href="/resume/builder" className="flex gap-2 items-center">
                <i class="fa-solid fa-file"></i>
                <p
                  className="text-lg text-white tracking-wide"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Create Resume
                </p>
              </a>
            </li>
          )}
          {sessionStorage.getItem("type") != "parent" ? (
            <li className=" p-3 text-white   px-5 items-center ">
              <a href="/job-details" className="flex gap-2 items-center">
                <i class="fa-solid fa-blender-phone"></i>

                <p
                  className="text-lg text-white tracking-wide"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Job Applied
                </p>
              </a>
            </li>
          ) : (
            ""
          )}
          <li
            className=" p-3 text-white   px-5 items-center flex items-center gap-2 "
            onClick={handleLogout}
          >
            <i className=" text-normal fa-solid fa-arrow-right-from-bracket"></i>
            <p
              className="text-lg text-white tracking-wide"
              style={{ fontFamily: "Poppins", fontWeight: 400 }}
            >
              Logout
            </p>
          </li>
          {/* <li className=" p-3 text-white   px-5  border-t border-gray-200  flex items-center bg-white justify-center">
            <button className="text-xl text-rose-400" onClick={handleLogout}>
              Logout
            </button>
          </li> */}
        </div>
      </ul>
    </nav>
  );
};

export default SideNav;
