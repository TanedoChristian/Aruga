import React, { useCallback, useEffect, useState } from "react";
import Jobs from "./Jobs";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import SideNav from "./SideNav";
import SetUp from "../Setup";
import axios from "axios";
import Background from "../img/background.png";
import Header from "./Header";

const Dashboard = (props) => {
  const [showNav, setShowNav] = useState(false);
  const handleShow = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/users/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        console.log(data);
      });
  });

  return (
    <div className="">
      <Header />
      <Jobs url={props.url} />

      <Footer>
        <ul className="flex w-full justify-around footer border-b border-gray-200 fixed bg-white bottom-0">
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
          <a href={`/blog`}>
            <li className="">
              <div className="flex flex-col justify-center items-center gap-1">
                <i class={`fa-solid fa-pen-to-square text-slate-700`}></i>
              </div>
            </li>
          </a>
          <a href={`/offer`}>
            <li className="">
              <div className="flex flex-col justify-center items-center gap-1">
                <i class="fa-regular fa-heart text-slate-700"></i>
              </div>
            </li>
          </a>
          <a href={`/notification`}>
            <li className="">
              <div className="inline-flex relative w-fit">
                <div className="absolute inline-block top-2 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-0.5 px-1.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
                  8
                </div>
                <i className="fa-regular fa-bell text-slate-700"></i>
              </div>
            </li>
          </a>
        </ul>
      </Footer>
    </div>
  );
};

export default Dashboard;
