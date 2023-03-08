import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import SetUp from "../Setup";
import axios from "axios";
import JobsCard from "./JobsCard";
const NotificationCard = () => {
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
    <div className="jobs-container flex justify-center w-full">
      <div className="flex w-11/12 jobs-wrapper flex-col gap-3">
        <div className="jobs-card flex flex-col shadow-inner">
          {notification.map((user) => (
            <JobsCard
              img={`${SetUp.SERVER_URL()}/${user.img}`}
              name={`${user.firstname} ${user.lastname}`}
              address={user.address}
              userid={user.user_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
