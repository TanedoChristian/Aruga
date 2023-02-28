import React, { useState } from "react";

const SideNav = (props) => {
  return (
    <nav
      id=""
      class="absolute z-[10] h-screen w-60 bg-gray-50 border-r border-gray-200"
      style={{ display: props.isShow ? "block" : "none" }}
    >
      <ul class="flex flex-col justify-between h-[90%]">
        <div>
          <li class="relative">
            <a
              class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>Link 1</span>
            </a>
          </li>

          <li>
            <a
              class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>Link 2</span>
            </a>
          </li>
        </div>
        <button className="p-4 bg-rose-400 text-white text-xl font-medium">
          Logout <i class="ml-2 fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </ul>
    </nav>
  );
};

export default SideNav;
