import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import JobsCard from "./JobsCard";
import axios from "axios";
import SetUp from "../Setup";
import useFetchApi from "../hooks/useFetchApi";
import Background from "../img/background.png";

const Jobs = () => {
  const { datas } = useFetchApi(`${SetUp.SERVER_URL()}/users`);

  return (
    <div className="w-full overflow-auto flex justify-center mt-2">
      <div className="flex flex-col-reverse w-[95%] gap-1">
        {datas.map((user) => (
          <JobsCard
            img={`${SetUp.SERVER_URL()}/${user.img}`}
            name={`${user.firstname} ${user.lastname}`}
            address={user.address}
            userid={user.user_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
