import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import Search from "./Search";
import axios from "axios";
import SetUp from "../Setup";
const OfferJobs = () => {
  const [jobs, setJobs] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");

  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/jobs`).then(({ data }) => {
      setJobs(data);
    });
  }, []);

  return (
    <div>
      <NavMenu />
      <Footer>
        <ul className="flex w-full justify-around footer border-b border-gray-200">
          <a href={`/dashboard?userid=${userid}`}>
            <li className="">
              <div className="flex flex-col justify-center items-center">
                <i className={`fa-solid fa-house text-slate-600`}></i>
              </div>
            </li>
          </a>
          <a href={`/blog?userid=${userid}`}>
            <li className="">
              <div className="flex flex-col justify-center items-center gap-1">
                <i class={`fa-solid fa-pen-to-square text-slate-700`}></i>
              </div>
            </li>
          </a>
          <a href="/offer">
            <li className="">
              <div
                className="flex flex-col justify-center items-center gap-1"
                style={{ borderBottom: "3px solid #ec878f" }}
              >
                <i
                  class="fa-regular fa-heart text-slate-700"
                  style={{ color: "#ec878f" }}
                ></i>
              </div>
            </li>
          </a>
          <li className="">
            <div className="inline-flex relative w-fit">
              <div className="absolute inline-block top-2 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-0.5 px-1.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
                8
              </div>
              <i className="fa-regular fa-bell text-slate-700"></i>
            </div>
          </li>
        </ul>
      </Footer>

      <div className="mt-2 flex  flex-col items-center gap-2 h-screen">
        <div className="flex w-full px-5 py-2">
          <h1 className="text-slate-800 font-bold text-3xl">Popular Jobs</h1>
        </div>

        {jobs.map((job) => (
          <div className="w-[95%] px-3 py-2  bg-white rounded-md border border-gray-200">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold tracking-wide text-slate-800">
                {job.jobpost_desc}
              </h1>
              <p className="text-slate-500 font-medium">{job.salary}</p>
              <div className="flex justify-between items-center">
                <p className="text-slate-500 font-medium">Tisa, Cebu City</p>

                <p className="px-3 bg-gray-200 text-slate-700">
                  {job.jobpost_type}
                </p>
              </div>
            </div>
            <div className="border border-rose-300 mt-3"></div>
            <div className="flex justify-end">
              <button className="p-2 bg-rose-400 mt-3 text-white rounded-md">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferJobs;
