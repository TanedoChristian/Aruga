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

  return (
    <div className="flex flex-col mt-2 items-center gap-1">
      {props.children}
      <div class="flex items-center p-4 bg-white  border border-gray-200 w-[95%] rounded-2xl shadow-xl">
        <img
          class="h-12 w-12 rounded-full"
          alt="John Doe's avatar"
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
        />

        <div class="ml-5 mt-1 overflow-hidden flex flex-col">
          <p class="text-sm text-gray-600 truncate">
            <span className="text-md font-semibold leading-tight text-gray-900">
              John Doe{" "}
            </span>
            and 8 others submitted an application in your job post and 8 others
            submitted an application in your job post
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
