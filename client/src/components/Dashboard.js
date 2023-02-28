import React from "react";
import Search from "./Search";
import Jobs from "./Jobs";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
const Dashboard = (props) => {
  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");
  return (
    <div>
      <div className=" flex flex-col">
        <NavMenu />
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

      {/* <div className="flex justify-center">
                
            </div> */}
    </div>
  );
};

export default Dashboard;
