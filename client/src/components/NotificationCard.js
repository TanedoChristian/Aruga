import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import SetUp from "../Setup";
import axios from "axios";
import JobsCard from "./JobsCard";
const NotificationCard = (props) => {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${SetUp.SERVER_URL()}/application/${sessionStorage.getItem("userid")}}`
      )
      .then(({ data }) => {
        console.log(data);
        setNotification(data);
      });
  }, []);

  const handleNotification = (id) => {
    window.location.href = "/user-details?userid=" + id;
  };

  return (
    <div className="flex flex-col mt-2 items-center gap-1">
      {notification.map((data) => (
        <div className="jobs-container flex justify-center w-full">
          <div className="flex items-center p-4 bg-white shadow-sm relative border border-gray-200">
            <span className="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">
              4:36 PM
            </span>

            <img
              className="h-12 w-12 rounded-full"
              alt="John Doe's avatar"
              src={`${SetUp.SERVER_URL()}/${data.img}`}
            />

            <div className="ml-5 mt-1">
              <p className="text-sm text-gray-600">
                <span
                  className="text-md font-semibold leading-tight text-gray-900"
                  onClick={() => handleNotification(data.babysitter_id)}
                >
                  {`${data.firstname} ${data.lastname}`}
                </span>
                <span className="text-ellipsis">
                  {" "}
                  submitted an application in your job post
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
