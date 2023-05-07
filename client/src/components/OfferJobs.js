import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import Search from "./Search";
import axios from "axios";
import SideNav from "./SideNav";
import SetUp from "../Setup";
import moment from "moment";
import Header from "./Header";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";
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
  const [showInput, setShowInput] = useState(true);
  const [success, setSuccess] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/jobs`).then(({ data }) => {
      setJobs(data);
    });

    axios
      .get(
        `${SetUp.SERVER_URL()}/subscribe/${sessionStorage.getItem("userid")}`
      )
      .then(({ data }) => {
        sessionStorage.setItem("subscription_id", data[0].subscription_id);
      });
  }, [showModal, showFormModal, success]);

  const [updateJob, setUpdateJob] = useState({});

  const handleUpdateTicket = (id) => {
    setUpdateJob((prev) => {
      return { ...prev, ...id };
    });
    setShowFormModal(true);
    setShowOptions(false);
  };

  const handleUpdateTitle = (e) => {
    setUpdateJob((prev) => {
      return { ...prev, jobpost_title: e.target.value };
    });
  };

  const handleUpdateAddress = (e) => {
    setUpdateJob((prev) => {
      return { ...prev, jobpost_address: e.target.value };
    });
  };

  const handleUpdateDescription = (e) => {
    setUpdateJob((prev) => {
      return { ...prev, jobpost_desc: e.target.value };
    });
  };

  const handleUpdateSalary = (e) => {
    setUpdateJob((prev) => {
      return { ...prev, salary: e.target.value };
    });
  };

  const submitUpdate = () => {
    axios({
      method: "PUT",
      url: SetUp.SERVER_URL() + "/jobs",
      data: updateJob,
    }).then((data) => {
      setSuccess(!success);
    });
    setShowFormModal(false);
  };

  const handleTitle = (e) => {
    setPostJob((prev) => {
      return { ...postJob, title: e.target.value };
    });
  };

  const handleCategory = (e) => {
    setPostJob((prev) => {
      return { ...postJob, category: e.target.value };
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
    console.log(sessionStorage.getItem("userid"));
    setActiveJob(true);
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/postjob",
      headers: { "Content-Type": "application/json" },
      data: {
        parent_id: sessionStorage.getItem("userid"),
        title: postJob.title,
        description: postJob.description,
        category: postJob.category,
        salary: postJob.salary,
        address: postJob.address,
        experience: selectValue,
        subid: sessionStorage.getItem("subscription_id"),
      },
    }).then(({ data }) => {
      setSuccess(true);
      setOpenModal(true);
      setShowModal(false);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`${SetUp.SERVER_URL()}/jobs/${id}`).then(({ data }) => {
      setSuccess(!success);
      setShowOptions(false);
    });
  };

  return (
    <div className="bg-white">
      <ConfirmModal
        isOpen={isOpenModal}
        width="w-[80%]"
        height="h-[20vh]"
        title="Job Submitted"
      >
        <div className="flex w-full items-center justify-center h-screen">
          <button
            className="p-3 px-10 rounded-md bg-rose-400 text-white"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Confirm
          </button>
        </div>
      </ConfirmModal>

      <div className=" flex flex-col gap-2 $ bg-white">
        <Header />

        <Footer>
          <ul className="flex w-full justify-around footer  border-b border-gray-200 fixed bottom-0">
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
                  <i class="fa-solid fa-note-sticky text-rose-500"></i>
                </div>
              </li>
            </a>
            <a href={`/notification`}>
              <li className="">
                <div className="inline-flex relative w-fit">
                  <i className="fa-regular fa-bell text-slate-700"></i>
                </div>
              </li>
            </a>
          </ul>
        </Footer>
      </div>
      <div className="flex justify-center w-full ">
        {showInput ? "" : "Pending Job Post"}
        <div
          className="w-[90%] flex items-center gap-2  p-1 shadow-md border border-gray-300 rounded-xl mt-3"
          style={{ display: showInput ? "flex" : "none" }}
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
                Post Job
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

              <label className="text-lg font-medium">Category</label>
              <select
                class="flex flex-col gap-2 p-2 rounded-md bg-white"
                onChange={handleCategory}
              >
                <option selected>Choose a Category</option>

                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>

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

      {/* Update Modal */}

      <div
        id="defaultModal"
        aria-hidden="true"
        className="absolute h-full fade-in-1 top-0  animation-fade w-[100%] bg-white"
        style={{ display: showFormModal ? "block" : "none" }}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg  h-screen shadow-xl">
            <div className="flex items-center justify-between p-3 border-b rounded-t-lg w-[100%]">
              <h3 className="text-2xl font-semibold text-gray-900 ">
                Update Job
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
                  defaultValue={updateJob.jobpost_title}
                  onChange={handleUpdateTitle}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Address</label>
                <input
                  type="text"
                  className="p-3  rounded-lg outline-none bg-gray-50 border border-slate-200"
                  defaultValue={updateJob.jobpost_address}
                  onChange={handleUpdateAddress}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-medium">Description</label>
                <textarea
                  id="message"
                  rows="5"
                  className="bg-gray-50 outline-none p-3 border border-slate-200 rounded-lg"
                  defaultValue={updateJob.jobpost_desc}
                  onChange={handleUpdateDescription}
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
                  defaultValue={updateJob.salary}
                  onChange={handleUpdateSalary}
                />
              </div>

              <div className="flex items-center p-6 space-x-2 rounded-b dark:border-gray-600 gap-3">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  onClick={submitUpdate}
                  className=" w-full text-white bg-rose-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-4 text-center"
                >
                  Update Job
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
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="mt-2 mb-2  font-bold">
                      {job.jobpost_title}
                    </h2>
                    {job.parent_id === sessionStorage.getItem("userid") ? (
                      <span className="rounded-md shadow-sm">
                        <button
                          className=" justify-center w-full p-2 items-center text-sm font-medium  rounded-md text-gray-700  bg-white  "
                          type="button"
                          onClick={() => {
                            setShowOptions(!showOptions);
                          }}
                        >
                          <span className="text-lg px-2 flex ">
                            <i class="fa-solid fa-ellipsis"></i>
                          </span>
                        </button>
                        <div
                          className={`
                          ${
                            showOptions ? "block" : "hidden"
                          }  dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 `}
                        >
                          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg outline-none z-50">
                            <div className="py-1">
                              <button
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                onClick={() => handleUpdateTicket(job)}
                              >
                                Update
                              </button>
                            </div>
                            <div className="py-1">
                              <button
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                onClick={() => handleDelete(job.jobpost_id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="text-sm">{job.jobpost_desc}</p>
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
