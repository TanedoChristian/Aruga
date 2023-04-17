import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import SetUp from "../Setup";
import axios from "axios";
import JobsCard from "./JobsCard";
const NotificationCard = (props) => {
  const [notification, setNotification] = useState([]);
  const [hire, setHire] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${SetUp.SERVER_URL()}/application/${sessionStorage.getItem("userid")}}`
      )
      .then(({ data }) => {
        setNotification(data);
      });

    axios
      .get(`${SetUp.SERVER_URL()}/hire/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setHire(data);
      });
  }, []);

  const handleNotification = (id, app_id) => {
    window.location.href = "/user-details?userid=" + id;
    sessionStorage.setItem("application_id", app_id);
  };

  return (
    <div className="flex flex-col mt-2 items-center gap-1">
      {sessionStorage.getItem("type") === "parent"
        ? notification.map((data) => (
            <div
              className="jobs-container flex justify-center w-full  "
              onClick={() =>
                handleNotification(data.babysitter_id, data.apply_id)
              }
            >
              <div className="flex items-center p-4 bg-white shadow-xl flex-col border border-gray-200 w-[95%] rounded-xl ">
                <div className="flex">
                  <img
                    className="h-12 w-12 rounded-full"
                    alt="John Doe's avatar"
                    src={`${SetUp.SERVER_URL()}/${data.img}`}
                  />

                  <div className="ml-5 mt-1">
                    <p className="text-sm text-gray-600">
                      <span className="text-md font-semibold leading-tight text-gray-900">
                        {`${data.firstname} ${data.lastname}`}
                      </span>
                      <span className="text-ellipsis">
                        {" "}
                        submitted an application in your job post
                      </span>
                    </p>
                  </div>
                </div>
                <span className="flex text-xs font-semibold uppercase  mr-3 text-gray-500 w-full justify-end">
                  {new Date(data.apply_date).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))
        : hire.map((data) => (
            <div className="jobs-container flex justify-center w-full  ">
              <div className="flex items-center p-4 gap-5 bg-white shadow-xl relative border border-gray-200 w-[95%] rounded-xl ">
                <img
                  src={`${SetUp.SERVER_URL()}/${data.img}`}
                  className="w-11 h-11 rounded-full"
                />

                <p className="text-sm text-gray-600">
                  <span className="text-md font-semibold leading-tight text-gray-900">
                    You are hired by {data.firstname} {data.lastname}
                  </span>
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default NotificationCard;
