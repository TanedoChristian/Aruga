import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import Search from "./Search";
import axios from "axios";
import SideNav from "./SideNav";
import SetUp from "../Setup";
import moment from "moment";
import Header from "./Header";
const OfferJobs = () => {
  const [jobs, setJobs] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");

  const [showModal, setShowModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectValue, setSelectValue] = useState("Select");
  const [showNav, setShowNav] = useState(false);
  const [postJob, setPostJob] = useState({});
  const [isActiveJob, setActiveJob] = useState(false);

  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/jobs`).then(({ data }) => {
      setJobs(data);
    });
  }, [showModal]);

  const handleTitle = (e) => {
    setPostJob((prev) => {
      return { ...postJob, title: e.target.value };
    });
  };

  const handleAddress = (e) => {
    setPostJob((prev) => {
      return { ...postJob, address: e.target.value };
    });
  };

  const handleSalary = (e) => {
    setPostJob((prev) => {
      return { ...postJob, salary: e.target.value };
    });
  };

  const handleDescription = (e) => {
    setPostJob((prev) => {
      return { ...postJob, description: e.target.value };
    });
  };

  const handleShow = () => {
    setShowNav(!showNav);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleValue = (e) => {
    setSelectValue(e.target.value);
    setShowDropDown(!showDropDown);
  };

  const handlePostJob = () => {
    let isActive = {
      parent_id: sessionStorage.getItem("userid"),
      status: "ongoing",
    };

    sessionStorage.setItem("job_status", JSON.stringify(isActive));
    setActiveJob(true);

    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/postjob",
      headers: { "Content-Type": "application/json" },
      data: {
        parent_id: sessionStorage.getItem("userid"),
        title: postJob.title,
        description: postJob.description,
        type: "Full Time",
        salary: postJob.salary,
        address: postJob.address,
        experience: selectValue,
      },
    }).then(({ data }) => {
      if (data == "Success") {
        setSuccess(true);
        setShowModal(!showModal);
      }
    });
  };

  return (
    <div className="bg-white">
      <div className=" flex flex-col gap-2 bg-white">
        <Header />

        <Footer>
          <ul className="flex w-full justify-around footer border-b border-gray-200 fixed bottom-0">
            <a href="/dashboard">
              <li className="">
                <div className="flex flex-col justify-center items-center">
                  <i className={`fa-solid fa-house text-slate-600`}></i>
                </div>
              </li>
            </a>
            <a href={`/blog`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i className={`fa-solid fa-pen-to-square text-slate-700`}></i>
                </div>
              </li>
            </a>
            <a href={`/offer`}>
              <li className="">
                <div
                  className="flex flex-col justify-center items-center gap-1"
                  style={{ borderBottom: "3px solid #ec878f" }}
                >
                  <i
                    className="fa-regular fa-heart text-slate-700"
                    style={{ color: "#ec878f" }}
                  ></i>
                </div>
              </li>
            </a>
            <a href={`/notification`}>
              <li className="">
                <div className="inline-flex relative w-fit">
                  <div className="absolute inline-block top-2 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-0.5 px-1.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
                    8
                  </div>
                  <i className="fa-regular fa-bell text-slate-700"></i>
                </div>
              </li>
            </a>
          </ul>
        </Footer>
      </div>
      <div className="flex justify-center w-full ">
        <div
          className="w-[90%] flex items-center gap-2  p-1 shadow-md border border-gray-300 rounded-xl mt-3"
          style={{ display: !isActiveJob ? "flex" : "none" }}
        >
          <i className="fa fa-search  top-5 text-xl text-slate-600 ml-2"></i>
          <input
            type="text"
            className="h-10  rounded-lg focus:outline-none hover:cursor-pointer bg-white border-none w-full"
            name=""
            placeholder="Post a Job"
            onClick={handleModal}
          />
        </div>
      </div>

      <div
        id="defaultModal"
        aria-hidden="true"
        className="absolute h-full fade-in-1 top-0  animation-fade w-[100%] bg-white"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg  h-screen shadow-xl">
            <div className="flex items-center justify-between p-3 border-b rounded-t-lg w-[100%]">
              <h3 className="text-2xl font-semibold text-gray-900 ">
                Post a Job
              </h3>
              <button
                type="button"
                className="text-gray-600 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4  flex flex-col gap-5 bg-white">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Title</label>
                <input
                  type=""
                  className="p-3 outline-none bg-gray-50 rounded-lg border border-slate-200"
                  placeholder="Title"
                  onChange={handleTitle}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Address</label>
                <input
                  type="text"
                  className="p-3  rounded-lg outline-none bg-gray-50 border border-slate-200"
                  placeholder="Address"
                  onChange={handleAddress}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Description</label>
                <textarea
                  id="message"
                  rows="5"
                  className="bg-gray-50 outline-none p-3 border border-slate-200 rounded-lg"
                  placeholder="Description"
                  onChange={handleDescription}
                ></textarea>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Experience</label>
                <div>
                  <button
                    id="dropdownDefaultButton"
                    className="w-[35%] py-2 flex justify-center items-center rounded-lg  text-slate-600 bg-gray-100 border border-gray-200"
                    type="button"
                    onClick={handleDropDown}
                  >
                    {selectValue}
                    <svg
                      className="w-6 h-6 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-rose-400"
                  style={{ display: showDropDown ? "block" : "none" }}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <button
                        className="block px-4 py-2"
                        onClick={handleValue}
                        value="1 year"
                      >
                        1 year
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2"
                        onClick={handleValue}
                        value="2 years"
                      >
                        2 years
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2"
                        onClick={handleValue}
                        value="3 years"
                      >
                        3 years
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2"
                        onClick={handleValue}
                        value="4 years"
                      >
                        4 years
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2"
                        onClick={handleValue}
                        value="None"
                      >
                        None
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Salary</label>
                <input
                  type="number"
                  className="p-3 bg-gray-50 rounded-lg outline-none w-[40%] border border-slate-200"
                  placeholder="Salary"
                  onChange={handleSalary}
                />
              </div>

              <div className="flex items-center p-6 space-x-2 rounded-b dark:border-gray-600 gap-3">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  onClick={handlePostJob}
                  className=" w-full text-white bg-rose-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-4 text-center"
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex  flex-col gap-5  h-full    bg-white">
        {jobs
          .slice(0)
          .reverse()
          .map((job) => (
            <div className="flex justify-center">
              <div className="w-[95%] border-t border-gray-200 rounded-md flex flex-col shadow-md">
                <div className="p-4">
                  <h2 className="mt-2 mb-2  font-bold">{job.jobpost_title}</h2>
                  <p className="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper nulla non metus auctor fringilla.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block px-2 py-1.5 leading-none bg-rose-500 text-white rounded font-semibold  tracking-wide text-xs">
                      {job.salary}.00 per month
                    </span>
                    <span className="inline-block px-2 py-1.5 leading-none  bg-rose-500 text-white rounded font-semibold  tracking-wide text-xs">
                      {job.jobpost_type}
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t  text-xs text-gray-700">
                  <span className="flex items-center mb-1">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
                    {moment(job.jobpost_date).fromNow()}
                  </span>
                  <span className="flex items-center justify-between">
                    <div>
                      <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                      {job.jobpost_address}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OfferJobs;
