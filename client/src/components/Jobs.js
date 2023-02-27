import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import JobsCard from "./JobsCard";
import axios from "axios";
import SetUp from "../Setup";

const Jobs = (props) => {
  const [users, setUser] = useState([]);
  console.log(process.env.SERVER_URL);
  useEffect(() => {
    axios({
      method: "get",
      url: props.url + "/users",
    }).then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="w-[95%]  flex flex-col gap-2">
        {users.map((user) => (
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
