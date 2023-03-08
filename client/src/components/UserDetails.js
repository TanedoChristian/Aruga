import React, { StrictMode, useEffect, useState } from "react";
import BioInfo from "./BioInfo";
import Ratings from "./Ratings";
import ProfileCategory from "./ProfileCategory";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import SetUp from "../Setup";
const UserDetails = () => {
  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");
  const [component, setComponent] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/users/${userid}`).then(({ data }) => {
      setUser(data[0]);
    });
  }, []);

  const [isDescription, setDescription] = useState(true);
  const [isReviews, setReviews] = useState(false);
  const [isResume, setResume] = useState(false);

  const [descriptionBg, setDescriptionBg] = useState("red");

  const handleBack = () => {
    window.location.href = `/dashboard?userid=${userid}`;
  };

  return (
    <div class=" bg-rose-200  flex flex-wrap items-center justify-center ">
      <div class="container bg-white rounded  shadow-lg transform duration-200 easy-in-out w-full  h-screen">
        <div className="absolute top-3 left-3" onClick={handleBack}>
          <div className="flex rounded-full w-10 h-10 justify-center items-center">
            <i class="fa-solid fa-angle-left text-3xl text-white"></i>
          </div>
        </div>

        <div class="flex w-full flex-col bg-rose-400">
          <div class="flex  w-full flex-col items-center mt-10 gap-3">
            <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl  flex items-center justify-center text-indigo-500 flex">
              <img
                src={`${SetUp.SERVER_URL()}/${user?.img}`}
                className="rounded-full object-cover h-full w-full border border-white"
              />
            </div>
            <div className="mb-10">
              <h1 class="text-2xl font-medium text-gray-50">
                {`${user.firstname ?? ""} ${user.lastname ?? ""}`}
              </h1>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center -mt-5 bg-white rounded-b rounded-[40px]">
          <div className="w-full flex justify-center  items-center mb-5 p-3  rounded-b rounded-3xl">
            <div className="w-[95%] flex items-center">
              <ul className="flex gap-4 justify-evenly w-full items-center list text-rose-400">
                <li
                  className="p-2 w-[30%] text-center"
                  style={{
                    backgroundColor: isDescription ? "#ec878f" : "",
                    color: isDescription ? "white" : "black",
                  }}
                  onClick={() => {
                    setDescription(true);
                    setReviews(false);
                  }}
                >
                  Details
                </li>
                <li
                  className="p-2 w-[30%] text-center"
                  onClick={() => {
                    setReviews(true);
                    setDescription(false);
                  }}
                >
                  Reviews
                </li>
                <li className="p-2 w-[30%] text-center">Resume</li>
              </ul>
            </div>
          </div>
        </div>

        {isDescription && (
          <BioInfo
            name={`${user.firstname ?? ""} ${user.lastname ?? ""}`}
            address={user.address ?? ""}
          />
        )}

        {isReviews && <Ratings />}

        {component}
      </div>
      <div className="flex  w-full justify-center fixed bottom-2">
        <button class="py-3 px-4  font-medium  w-[70%] bg-indigo-500 text-white rounded-lg">
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
