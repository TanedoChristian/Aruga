import React, { useState } from "react";

const SideNav = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();

    window.location.href = "/login";
  };

  return (
    <nav
      id=""
      class="fixed fade-in-1 top-0 z-10 h-screen animation-fade w-[100%] bg-white mt-[6rem]"
      style={{ display: props.isShow ? "block" : "none" }}
    >
      <ul class="flex flex-col justify-between h-[90%] p-5">
        <div>
          <li class="">
            <p>Test</p>
          </li>

          <li>
            <span>Link 2</span>
          </li>
        </div>
        <button
          className="p-4 bg-rose-400 text-white text-xl font-medium mb-5"
          onClick={handleLogout}
        >
          Logout <i class="ml-2 fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </ul>
    </nav>
  );
};

export default SideNav;
