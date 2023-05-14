import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import JobsCard from "./JobsCard";
import axios from "axios";
import SetUp from "../Setup";
import useFetchApi from "../hooks/useFetchApi";
import Background from "../img/background.png";

const Jobs = () => {
  const [datas, setDatas] = useState([]);
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/users`).then(({ data }) => {
      console.log(data);
      setDatas(data);
    });

    axios.get(`${SetUp.SERVER_URL()}/review/ratings`).then(({ data }) => {
      console.log(data);
      setRatings(data);
    });

    Object.keys(datas).map((key) => {
      if (ratings.hasOwnProperty(key)) {
        ratings.status = true;
      }
    });

    console.log(ratings);
  }, []);

  return (
    <div className="w-full overflow-scroll flex justify-center   rounded-t-2xl   pb-20">
      <div className="flex flex-col-reverse w-full gap-3">
        {datas.map((user) => (
          <JobsCard
            img={`${SetUp.SERVER_URL()}/${user.img}`}
            name={`${user.firstname} ${user.lastname}`}
            address={user.address}
            userid={user.user_id}
            age={user.age}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
