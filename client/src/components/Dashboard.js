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
      .get(
        `${SetUp.SERVER_URL()}/subscribe/${sessionStorage.getItem("userid")}`
      )
      .then(({ data }) => {
        if (data.length == 0) {
          window.location.href = `/subscription?userid=${sessionStorage.getItem(
            "userid"
          )}`;
        } else if (data[0].status.toString().toLowerCase() != "active") {
          window.location.href = "/subscription/pending";
        } else {
          sessionStorage.setItem("subscription_id", data[0].subscription_id);
        }
      });

    axios
      .get(`${SetUp.SERVER_URL()}/users/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setUser(data[0]);
        sessionStorage.setItem("user", JSON.stringify(data[0]));
        sessionStorage.setItem("userimg", data[0].img);
      });
  }, []);

  return (
    <div className="h-screen bg-white">
      <Header />
      <Banner>
        <div className="w-full flex justify-center  p-3 ">
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

      <div className="flex w-full pb-2 px-5 justify-between items-center">
        <h1 className="text-neutral-900 font-bold text-[1rem] poppins tracking-wide">
          Babysitters
        </h1>
        <h1 className="text-gray-500  ">See All</h1>
      </div>
      <Jobs url={props.url} />

      <Footer>
        <ul className="flex w-full justify-around footer border-t border-gray-200 fixed bottom-0 ">
          <a href={`/dashboard`}>
            <li className="">
              <div
                className="flex flex-col justify-center items-center"
                style={{ borderBottom: "3px solid #ec878f" }}
              >
                <i className={`fa-solid fa-house text-rose-500`}></i>
              </div>
            </li>
          </a>
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
