import React from "react";
import Footer from "./Footer";
import NavMenu from "./NavMenu";

const OfferJobs = () => {
  return (
    <div>
      <NavMenu />
      <Footer>
        <ul className="flex w-full justify-around footer border-b border-gray-200">
          <li className="">
            <div className="flex flex-col justify-center items-center">
              <i className={`fa-solid fa-house text-slate-600`}></i>
            </div>
          </li>
          <a href="/blog">
            <li className="">
              <div className="flex flex-col justify-center items-center gap-1">
                <i class={`fa-solid fa-pen-to-square text-slate-700`}></i>
              </div>
            </li>
          </a>
          <a href="/offer">
            <li className="">
              <div
                className="flex flex-col justify-center items-center gap-1"
                style={{ borderBottom: "3px solid #ec878f" }}
              >
                <i
                  class="fa-regular fa-heart text-slate-700"
                  style={{ color: "#ec878f" }}
                ></i>
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
  );
};

export default OfferJobs;
