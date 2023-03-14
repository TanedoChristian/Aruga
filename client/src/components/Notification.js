import React from "react";
import Header from "./Header";
import NotificationCard from "./NotificationCard";
import Footer from "./Footer";

const Notification = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center mt-7">
        <div className="w-11/12 flex justify-between">
          <h1 className="font-bold"> Notifications </h1>
          <p className="p-inactive">See All</p>
        </div>
      </div>

      <NotificationCard />

      <Footer>
        <ul className="flex w-full justify-around footer border-b border-gray-200 fixed bottom-0">
          <a href="/dashboard">
            <li className="">
              <div className="flex flex-col justify-center items-center">
                <i className={`fa-solid fa-house text-slate-600`}></i>
              </div>
            </li>
          </a>
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
              <div
                className="inline-flex relative w-fit"
                style={{ borderBottom: "3px solid #ec878f" }}
              >
                <i
                  className="fa-regular fa-bell text-slate-700"
                  style={{ color: "#ec878f" }}
                ></i>
              </div>
            </li>
          </a>
        </ul>
      </Footer>
    </div>
  );
};

export default Notification;
