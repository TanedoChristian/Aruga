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
    <div class=" bg-gray-200  flex flex-wrap items-center justify-center">
      <div class="container bg-white rounded  shadow-lg transform duration-200 easy-in-out w-full  h-screen">
        <div className="absolute top-2 left-3" onClick={handleBack}>
          <div className="flex rounded-full border border-gray-300 w-10 h-10 justify-center items-center">
            <i class="fa-solid fa-angle-left text-2xl"></i>
          </div>
        </div>
        <div class="h-[10rem]  flex">
          <img
            class="w-full rounded-t"
            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Photo by aldi sigun on Unsplash"
          />
        </div>
        <div class="flex justify-start px-5 -mt-10 mb-3">
          <span clspanss="block relative h-32 w-32">
            <img
              alt="Photo by aldi sigun on Unsplash"
              src={`${SetUp.SERVER_URL()}/${user?.img}`}
              class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
            />
          </span>
        </div>

        <div className="w-full flex justify-center  items-center mb-5">
          <div className="w-[95%] flex items-center">
            <ul className="flex gap-4 justify-evenly w-full items-center list">
              <li
                className="p-2"
                style={{
                  backgroundColor: isDescription ? "#ec878f" : "white",
                  color: isDescription ? "white" : "",
                }}
                onClick={() => {
                  setDescription(true);
                  setReviews(false);
                }}
              >
                Description
              </li>
              <li
                className="p-2"
                onClick={() => {
                  setReviews(true);
                  setDescription(false);
                }}
              >
                Reviews
              </li>
              <li className="p-2">Resume</li>
            </ul>
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
    </div>

    // <div className="user-details-container w-full bg-white">
    //   <div className="h-full user-wrapper flex flex-col">

    //     </div>
    //     <div className="h-[40vh] flex w-full border ">
    //       <img src={data.img} className="object-cover" />
    //     </div>

    //     {component}

    //     <div className="w-full flex justify-center p-5 bg-white">
    //       <button class=" hire-now-btn text-white font-bold py-2 px-4 border border-white rounded w-4/5 mt-5 ">
    //         Hire Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserDetails;
