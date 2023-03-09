import React, { useCallback, useEffect, useState } from "react";
import Jobs from "./Jobs";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import SideNav from "./SideNav";
import SetUp from "../Setup";
import axios from "axios";
import Modal from "react-modal";
const DashboardBabysitter = (props) => {
  const [jobs, setJobs] = useState([]);

  const [applicant, setApplicant] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/users/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {});
  }, []);

  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/jobs`).then(({ data }) => {
      setJobs(data);
    });
  }, []);

  const handleApply = (id, parent_id) => {
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/application",
      data: {
        babysitter_id: sessionStorage.getItem("userid"),
        jobpost_id: id,
        parent_id: parent_id,
        apply_status: "active",
        apply_deleted: "0",
      },
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="">
      <div className=" flex flex-col gap-2 bg-white">
        <nav class="bg-white  w-full  justify-center flex">
          <div class="flex justify-between items-center  w-[98%] p-2">
            <div class="flex items-center gap-2 ">
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-rose-400 tracking-wider">
                Aruga
              </span>
            </div>

            <div class="flex items-center gap-2 w-full justify-end">
              <div className="">
                <img
                  src={sessionStorage.getItem("userimg")}
                  className="h-9 w-9 rounded-full object-cover shadow-sm"
                />
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-1  text-sm text-gray-700 rounded-lg  focus:outline-none "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={handleShow}
              >
                <svg
                  class="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <SideNav isShow={showNav} />

        <Footer>
          <ul className="flex w-full justify-around footer border-b border-gray-200">
            <li className="">
              <div
                className="flex flex-col justify-center items-center"
                style={{ borderBottom: "3px solid #ec878f" }}
              >
                <i
                  className={`fa-solid fa-house text-slate-600`}
                  style={{ color: "#ec878f" }}
                ></i>
              </div>
            </li>
            <a href={`/blog`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i class={`fa-solid fa-pen-to-square text-slate-700`}></i>
                </div>
              </li>
            </a>
            <a href={`/offer`}>
              <li className="">
                <div className="flex flex-col justify-center items-center gap-1">
                  <i class="fa-regular fa-heart text-slate-700"></i>
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
      </div>

      <h1 className="mt-5 text-xl font-bold tracking-wide ml-3">
        Available Jobs
      </h1>

      <div
        id="defaultModal"
        tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full bg-gray-100 bg-opacity-75"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div class="flex w-full items-center h-full justify-center">
          <div class="relative  rounded-lg shadow bg-indigo-400">
            <div class="flex items-start justify-between p-4  rounded-t">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Application Submitted
              </h3>
            </div>

            <div class="flex items-center p-6 space-x-2  rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                onClick={() => setShowModal(false)}
                class="text-white  text-md font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Confirm
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                onClick={() => setShowModal(false)}
                class=" text-white text-md font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md  text-sm font-medium px-5 py-2.5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col items-center gap-2 h-full">
        <div className="flex w-full px-5 py-2"></div>

        {jobs
          .slice(0)
          .reverse()
          .map((job) => (
            <div class="border border-gray-200">
              <div class="p-4">
                <h2 class="mt-2 mb-2  font-bold">{job.jobpost_title}</h2>
                <p class="text-sm">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <div class="mt-3 flex items-center gap-2">
                  <span class="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
                    20,000 a month
                  </span>
                  <span class="inline-block px-2 py-1.5 leading-none bg-gray-200 text-slate-500 rounded font-semibold  tracking-wide text-xs">
                    {job.jobpost_type}
                  </span>
                </div>
              </div>
              <div class="p-4 border-t  text-xs text-gray-700">
                <span class="flex items-center mb-1">
                  <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 hours
                  ago
                </span>
                <span class="flex items-center justify-between">
                  <div className="flex items-center">
                    <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                    <p>{job.jobpost_address}</p>
                  </div>
                  <button
                    className="text-xs text-indigo-700"
                    onClick={() => {
                      setShowModal(true);
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
    </div>
  );
};

export default DashboardBabysitter;
