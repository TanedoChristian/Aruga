import React, { useEffect, useState } from "react";
import Header from "./Header";
import SetUp from "../Setup";
import axios from "axios";
import moment from "moment";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";

const JobDetails = () => {
  const [user, setUser] = useState([]);

  const [jobDetails, setJobDetails] = useState({});

  const [isOpen, setModalOpen] = useState(false);

  const [isSuccess, setSuccess] = useState(false);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${SetUp.SERVER_URL()}/application/babysitter/${sessionStorage.getItem(
        "userid"
      )}`,
    }).then(({ data }) => {
      console.log(data);
      setUser(data);
    });
  }, [isSuccess]);

  const handleCancel = (item) => {
    setJobDetails(item);
    setModalOpen(true);
  };

  const handleDelete = () => {
    axios({
      method: "PUT",
      url: `${SetUp.SERVER_URL()}/application/delete/${jobDetails.apply_id}`,
    }).then(({ data }) => {
      setSuccess(!isSuccess);
      setModalOpen(false);
    });
  };

  return (
    <div className="">
      <Header />

      <ConfirmModal
        isOpen={isOpen}
        title="Delete Application"
        width="w-[90%]"
        height="h-[20vh]"
        handleClose={() => setModalOpen(false)}
      >
        <div className="flex justify-center gap-5 items-center h-screen">
          <button
            className="p-3 px-5 bg-rose-400 text-white rounded-md shadow-md"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="p-3 px-5 bg-rose-400 text-white rounded-md shadow-md"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </ConfirmModal>

      <div className="flex w-full flex-col">
        <div className="w-[100%] flex flex-col">
          <div className="flex flex-col p-5">
            <h1 className="font-bold text-md poppins"> Applied Jobs </h1>
            <div className="w-[50%] bg-rose-300 p-1"></div>
          </div>
          <div className="flex justify-center w-ful">
            <div className="bg-gray-100 rounded-t-xl w-[90%]">
              {user.map((job) => (
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
                        className="px-5 py-1 bg-rose-400 text-white"
                        onClick={() => handleCancel(job)}
                      >
                        Cancel Application
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
