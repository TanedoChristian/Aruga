import React, { useCallback, useEffect, useState } from "react";
import Jobs from "./Jobs";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import SideNav from "./SideNav";
import SetUp from "../Setup";
import axios from "axios";
import Background from "../img/background.png";
import Header from "./Header";
import ParentBanner from "../img/parentsbanner.png";
import Banner from "./Banner";

const Dashboard = (props) => {
  if (sessionStorage.getItem("type") != "parent") {
    window.location.href = "/dashboard-babysitter";
  }

  const [user, setUser] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const handleShow = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/users/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setUser(data[0]);
        sessionStorage.setItem("user", JSON.stringify(data[0]));
        sessionStorage.setItem("userimg", data[0].img);
      });
  }, []);

  return (
    <div className="h-screen bg-rose-50">
      <Header />
      <Banner>
        <div className="flex w-full justify-center mt-7">
          <div className="w-[90%]">
            <h1
              className="text-2xl font-bold text-neutral-800 tracking-wide"
              style={{ fontFamily: "Poppins" }}
            >
              Hello, {user.firstname}
            </h1>
          </div>
        </div>

        <div className="w-full flex justify-center mt-2 p-3  pb-8 ">
          <div className="w-[98%] flex justify-center">
            <div className="w-[full] h-[10rem] flex">
              <img
                src={ParentBanner}
                className="object-cover rounded-2xl border border-gray-200 shadow-md"
              />
            </div>
          </div>
        </div>
      </Banner>

      <Jobs url={props.url} />

      <Footer>
        <ul className="flex w-full justify-around footer border-t border-gray-300  fixed bg-white rounded-t bottom-0">
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
                <i className={`fa-solid fa-pen-to-square text-slate-700`}></i>
              </div>
            </li>
          </a>
          <a href={`/offer`}>
            <li className="">
              <div className="flex flex-col justify-center items-center gap-1">
                <i className="fa-regular fa-heart text-slate-700"></i>
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
