import React, { useCallback, useEffect, useState } from "react";
import Search from "./Search";
import Jobs from "./Jobs";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import SideNav from "./SideNav";
const Dashboard = (props) => {
  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");

  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <SideNav isShow={showNav} />
      <div className=" flex flex-col">
        <nav class="bg-white  w-full  justify-center flex">
          <div class="flex justify-between items-center  w-[90%] p-2">
            <div class="flex items-center gap-2 ">
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-rose-400 tracking-wider">
                Aruga
              </span>
            </div>
            <div class="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-700 rounded-lg  focus:outline-none "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={handleShow}
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <Footer>
          <ul className="flex w-full justify-around footer border-b border-gray-200">
            <li className="">
              <div
                className="flex flex-col justify-center items-center"
                style={{ borderBottom: "3px solid #ec878f" }}
              >
                <i
                  className={`fa-solid fa-house text-slate-600`}
                  style={{ color: "#ec878f" }}
                ></i>
              </div>
            </li>
            <a href={`/blog?userid=${userid}`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i class={`fa-solid fa-pen-to-square text-slate-700`}></i>
                </div>
              </li>
            </a>
            <a href={`/offer?userid=${userid}`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i class="fa-regular fa-heart text-slate-700"></i>
                </div>
              </li>
            </a>

            <li className="">
              <div className="inline-flex relative w-fit">
                <div className="absolute inline-block top-2 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-0.5 px-1.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
                  8
                </div>
                <i className="fa-regular fa-bell text-slate-700"></i>
              </div>
            </li>
          </ul>
        </Footer>
      </div>

      <div></div>

      <div className="p-5 mt-1 rounded flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800">
            Popular Categories
          </h1>
        </div>

        <ul className="flex gap-3 overflow-x-auto items-center">
          <li>
            <a
              href="#"
              className="text-center p-1 px-3 secondary-clr  text-white rounded-lg flex border-gray-400 mt-2"
            >
              <span className="whitespace-nowrap">All</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-center p-2 bg-white text-black rounded-lg flex border-gray-400 mt-2"
            >
              <span className="whitespace-nowrap">Full Time</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2"
            >
              <span className="whitespace-nowrap">Part Time</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2"
            >
              <span className="whitespace-nowrap">Teenager</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2"
            >
              <span className="whitespace-nowrap">Man</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center p-2 bg-white  text-black rounded-lg flex border-gray-400  mt-2"
            >
              <span className="whitespace-nowrap">Teenager</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col  w-full">
          <Jobs url={props.url} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
