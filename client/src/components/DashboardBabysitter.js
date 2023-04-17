import React, { useCallback, useEffect, useState } from "react";
import Jobs from "./Jobs";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import SideNav from "./SideNav";
import SetUp from "../Setup";
import axios from "axios";
import Header from "./Header";
import Banner from "../img/banner.png";
import Modal from "./Modal";
import moment from "moment";

const DashboardBabysitter = (props) => {
  const [jobs, setJobs] = useState([]);

  const [applicant, setApplicant] = useState({});
  const [isShowModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isShowSort, setShowSort] = useState(false);
  const [salary, setSalary] = useState({ min: 0.0, max: 0.0 });
  const [isSort, setSort] = useState(false);
  const [isShowAlert, setAlert] = useState(false);

  const handleShow = () => {
    setShowNav(!showNav);
  };

  const handleShowSort = () => {
    setShowSort(!isShowSort);
  };

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

  const handleMinSlider = (e) => {
    setSalary((prev) => {
      return { ...prev, min: e.target.value };
    });
  };

  const handleMaxSlider = (e) => {
    setSalary((prev) => {
      return { ...prev, max: e.target.value };
    });
  };

  const handleAlert = () => {
    setAlert(!isShowAlert);
  };

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/users/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {});
  }, []);

  useEffect(() => {
    axios
      .get(
        `${SetUp.SERVER_URL()}/subscribe/${sessionStorage.getItem("userid")}`
      )
      .then(({ data }) => {
        sessionStorage.setItem("subscription_id", data[0].subscription_id);
      });

    axios.get(`${SetUp.SERVER_URL()}/jobs`).then(({ data }) => {
      setJobs(data);
    });
  }, []);

  const handleApply = (id, parent_id, subscription_id) => {
    setAlert(!isShowAlert);
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/application",
      data: {
        babysitter_id: sessionStorage.getItem("userid"),
        jobpost_id: id,
        parent_id: parent_id,
        apply_status: "pending",
        apply_deleted: "0",
        subid: subscription_id
      },
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="">
      <Modal isShowModal={isShowModal}></Modal>

      <div
        className="h-[10%] w-[70%] top-[50%] left-[15%] bg-rose-400 fixed flex-col z-50 w3-animate-right rounded-lg shadow-2xl "
        style={{ display: isShowAlert ? "block" : "none" }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-xl font-medium text-white mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            Application Submitted
          </h1>
          <button
            className="p-3 bg-rose-300 text-white flex justify-center w-[50%] rounded-lg shadow-md"
            onClick={handleAlert}
          >
            Okay
          </button>
        </div>
      </div>

      <div
        className="h-screen w-[60%]  bg-white fixed   right-0  flex-col z-50 w3-animate-right border border-gray-200 "
        style={{ display: isShowModal ? "block" : "none" }}
      >
        <div className="flex justify-between p-3 border-b border-gray-300 items-center">
          <h1
            className="text-xl font-bold tracking-wide text-slate-800"
            style={{ fontFamily: "Poppins" }}
          >
            Filter
          </h1>
          <i
            className="fa-solid fa-xmark text-2xl text-slate-700"
            onClick={handleShowModal}
          ></i>
        </div>
        <h1 className="text-xl font-medium p-3">Date</h1>
        <div className="flex gap-3 items-center  p-3 bg-gray-100 rounded-lg justify-around">
          <div className="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-rose-400 bg-gray-100 border-gray-300 focus:ring-rose-100 "
            />
            <label className="ml-2 text-sm font-medium text-gray-700 ">
              Latest
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-rose-400 bg-gray-100 border-gray-300  focus:ring-rose-100   "
            />
            <label className="ml-2 text-sm font-medium text-gray-700">
              Old
            </label>
          </div>
        </div>

        <div className="px-4 py-6 bg-gray-100">
          <h3 className="-mx-2 -my-3 flow-root">
            <div>
              <span className="font-medium text-gray-900 bg-white">Salary</span>

              <div className="mt-5 p-2">
                <div className="flex gap-3">
                  <h1>Min</h1>
                </div>

                <input
                  type="range"
                  className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                  onChange={handleMinSlider}
                  min="0"
                  max="20000"
                  step="100"
                  id="customRange3"
                />
              </div>
              <h1>Max</h1>
              <div className="p-2">
                <input
                  type="range"
                  className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                  onChange={handleMaxSlider}
                  min="0"
                  max="20000"
                  step="100"
                  id="customRange3"
                />
              </div>
              <div>
                <p className=" p-2 text-xs">
                  Range: Php. {salary.min} - Php. {salary.max}
                </p>
              </div>
            </div>
          </h3>
        </div>
        <button className="fixed bottom-5 p-3 bg-rose-400 text-white font-medium text-lg  right-5 w-[50%] rounded-md">
          Apply
        </button>
      </div>

      <div className="flex h-[6rem]  w-full justify-center">
        <div className="flex w-[90%]  justify-between items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1
              className=" font-bold text-2xl tracking-wide"
              style={{ fontFamily: "Poppins", fontWeight: 600 }}
            >
              <span className="text-sm font-medium">Welcome, </span> <br />{" "}
              Cherrie Pearl
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src={`${SetUp.SERVER_URL()}/${sessionStorage.getItem("userimg")}`}
              className="w-11 h-11 rounded-full"
            />
            <i
              className="fa-solid fa-bars-staggered text-xl font-bold text-rose-400"
              onClick={handleShow}
            ></i>
          </div>
        </div>

        <SideNav isShow={showNav} setShowNav={setShowNav} />
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="w-[90%] flex justify-center">
          <input
            type="text"
            className="px-5 py-3 w-[95%] rounded-2xl bg-white border border-gray-100 shadow-md outline-none hover:border-rose-500"
            placeholder="Search for jobs"
          />

          <i
            className="fa-solid fa-search text-xl font-bold text-white absolute right-6  bg-rose-400 p-2 px-3 mt-1 text-center rounded-full"
            onClick={handleShow}
          ></i>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6 p-3  pb-8 ">
        <div className="w-[98%] flex justify-center">
          <div className="w-[full] h-[10rem] flex">
            <img
              src={Banner}
              className="object-cover rounded-2xl border border-gray-200 shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <div className="w-[90%] flex justify-between items-center">
          <h1
            className=" font-bold text-xl tracking-wider  text-slate-800"
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            Recent Jobs
          </h1>
          <div className="flex items-center gap-6">
            <div className="gap-2 flex items-center" onClick={handleShowSort}>
              <p className="text-slate-600 text-sm">Sort By</p>
              <div
                className=" dropdown-menu transition-all duration-300 transform origin-top-right translate-y-1 scale-95 fade-in-1"
                style={{ display: isShowSort ? "block" : "none" }}
              >
                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                  <div className="py-1">
                    <p
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                      onClick={() => setSort(true)}
                    >
                      Latest
                    </p>
                  </div>

                  <div className="py-1">
                    <a
                      tabindex="3"
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                      role="menuitem"
                      onClick={() => setSort(false)}
                    >
                      Old
                    </a>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <i
              className="fa-solid fa-filter text-slate-700 text-sm"
              onClick={handleShowModal}
            ></i>
          </div>
        </div>
      </div>
      {isSort ? (
        <div className="flex  flex-col items-center gap-4 h-full border mt-5  rounded-t-3xl bg-white ">
          {jobs
            .slice(0)
            .reverse()
            .map((job) => (
              <div className="border border-gray-100 w-[95%] shadow-md  rounded-xl bg-white">
                <div className="p-4">
                  <div className="flex justify-between">
                    <h2
                      className="font-bold tracking-wide antialiased text-slate-900 text-lg"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {job.jobpost_title}
                    </h2>

                    <p
                      className="font-medium tracking-tight text-slate-800 text-xl"
                      style={{ fontFamily: "Poppins" }}
                    >
                      <i className="fa-regular fa-bookmark"></i>
                    </p>
                  </div>
                  <p className="text-xs font-medium p-2 mt-2 mb-2 text-slate-700">
                    {job.jobpost_desc}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
                      {job.jobpost_type}
                    </span>
                    <span className="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
                      <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
                      {moment(job.jobpost_date).fromNow()}
                    </span>
                  </div>
                </div>
                <div className="px-4 py-2 text-xs text-gray-700  flex flex-col gap-1 justify-center ">
                  <div className="flex items-center">
                    <i className="far fa-address-card fa-fw  mr-2 text-rose-500"></i>
                    <p className="text-xs">20,000 a month</p>
                  </div>
                  <span className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="far fa-address-card fa-fw text-rose-500 mr-2"></i>
                      <p>{job.jobpost_address}</p>
                    </div>
                    <button
                      className="text-xs text-indigo-700 font-medium"
                      onClick={() => {
                        handleApply(job.jobpost_id, job.parent_id);
                      }}
                    >
                      Apply Now
                    </button>
                  </span>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex  flex-col items-center gap-4 h-full border mt-5 border-gray-100 rounded-t-3xl bg-white">
          {jobs.slice(0).map((job) => (
            <div className="border border-gray-100 w-[95%] shadow-md  rounded-xl bg-white">
              <div className="p-4">
                <div className="flex justify-between">
                  <h2
                    className="font-bold tracking-wide antialiased text-slate-900 text-lg"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {job.jobpost_title}
                  </h2>

                  <p
                    className="font-medium tracking-tight text-slate-800 text-xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </p>
                </div>
                <p className="text-xs font-medium p-2 mt-2 mb-2 text-slate-700">
                  {job.jobpost_desc}
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
                    {job.jobpost_type}
                  </span>
                  <span className="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
                    {moment(job.jobpost_date).fromNow()}
                  </span>
                </div>
              </div>
              <div className="px-4 py-2 text-xs text-gray-700  flex flex-col gap-1 justify-center ">
                <div className="flex items-center">
                  <i className="far fa-address-card fa-fw text-rose-500 mr-2"></i>
                  <p className="text-xs">20,000 a month</p>
                </div>
                <span className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="far fa-address-card fa-fw text-rose-500 mr-2"></i>
                    <p>{job.jobpost_address}</p>
                  </div>
                  <button
                    className="text-xs text-indigo-700 font-medium"
                    onClick={() => {
                      handleApply(job.jobpost_id, job.parent_id, job.subscription_id);
                    }}
                  >
                    Apply Now
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className=" fixed bottom-5 w-[90%] left-5">
        <Footer>
          <ul className="flex w-full justify-around footer border-b border-gray-200 rounded-full bg-gray-50 shadow-md py-4">
            <li className="">
              <div className="flex flex-col justify-center items-center rounded-full bg-rose-400">
                <i className={`fa-solid fa-house text-white`}></i>
              </div>
            </li>
            <a href={`/blog`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i className={`fa-solid fa-pen-to-square text-slate-700`}></i>
                </div>
              </li>
            </a>

            <li className="">
              <div className="inline-flex relative w-fit">
                <i className="fa-regular fa-bell text-slate-700"></i>
              </div>
            </li>
          </ul>
        </Footer>
      </div>
    </div>
  );
};

export default DashboardBabysitter;
