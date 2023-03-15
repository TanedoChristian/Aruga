import React from "react";
import Header from "./Header";
import NotificationCard from "./NotificationCard";
import Footer from "./Footer";

const Notification = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      <div className="bg-rose-300 h-screen rounded-t-2xl">
        <h1
          className="text-2xl font-bold tracking-wide text-white 0 p-5 "
          style={{ fontFamily: "Poppins", fontWeight: 800 }}
        >
          Notifications
        </h1>

        <NotificationCard />

        <Footer>
          <div className="flex w-full justify-center">
            <ul className="flex w-full justify-around footer border-b border-gray-200 fixed bottom-0 rounded-t-2xl">
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
                    <i
                      className={`fa-solid fa-pen-to-square text-slate-700`}
                    ></i>
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
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default Notification;
