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
        <div className="flex flex-col">
          <div className="flex w-full justify-center">
            <div className="flex w-[95%] gap-3 mt-5">
              <h1
                className="text-lg font-bold text-white tracking-wide"
                style={{ fontFamily: "Poppins" }}
              >
                Today
              </h1>
            </div>
          </div>

          <NotificationCard />

          <div className="flex w-full justify-center mt-5">
            <div className="flex w-[95%] gap-3">
              <h1
                className="text-lg font-bold text-white tracking-wide"
                style={{ fontFamily: "Poppins" }}
              >
                Last Week
              </h1>
            </div>
          </div>
          <NotificationCard>
            <div className="jobs-container flex justify-center w-[95%]">
              <div class="flex items-center p-4 bg-white shadow-sm relative border border-gray-200 rounded-2xl">
                <span class="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">
                  4:36 PM
                </span>

                <img
                  class="h-12 w-12 rounded-full"
                  alt="John Doe's avatar"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                />

                <div class="ml-5 mt-1">
                  <p class="text-sm text-gray-600">
                    <span className="text-md font-semibold leading-tight text-gray-900">
                      Cj Tañedo{" "}
                    </span>
                    <span className="text-ellipsis">
                      submitted an application in your job post
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </NotificationCard>
        </div>
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
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default Notification;
