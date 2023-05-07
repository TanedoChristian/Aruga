import React, { useEffect, useState } from "react";
import SetUp from "../Setup";
import Header from "./Header";
import axios from "axios";
import moment from "moment";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";
const UserJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isOpen, setModalOpen] = useState(false);

  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/jobs/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setJobs(data);
      });
  }, [success]);

  const handleDelete = (id) => {
    setJobDetails(id);
    setModalOpen(true);
  };

  return (
    <div>
      <ConfirmModal
        isOpen={isOpen}
        title="Delete Post"
        width="w-[90%]"
        height="h-[20vh]"
        handleClose={() => setModalOpen(false)}
      >
        <div className="flex justify-center gap-5 items-center h-screen">
          <button
            className="p-3 px-5 bg-rose-400 text-white rounded-md shadow-md"
            onClick={() => {
              axios
                .delete(`${SetUp.SERVER_URL()}/jobs/${jobDetails.jobpost_id}`)
                .then(({ data }) => {
                  alert("Successfully Deleted");

                  setSuccess(!success);
                  setModalOpen(false);
                });
            }}
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

      <Header />
      <div className="flex flex-col p-5">
        <h1 className="font-bold text-md poppins"> Posted Jobs </h1>
        <div className="w-[50%] bg-rose-300 p-1"></div>
      </div>

      <div className="mt-5 flex  flex-col gap-5  h-full    bg-white">
        {jobs
          .slice(0)
          .reverse()
          .map((job) => (
            <div className="flex justify-center">
              <div className="w-[95%] border-t border-gray-200 rounded-md flex flex-col shadow-md">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="mt-2 mb-2  font-bold">
                      {job.jobpost_title}
                    </h2>
                    <i
                      class="fa-regular fa-trash-can text-[20px]"
                      onClick={() => handleDelete(job)}
                    ></i>
                  </div>
                  <p className="text-sm">{job.jobpost_desc}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block px-2 py-1.5 leading-none bg-rose-500 text-white rounded font-semibold  tracking-wide text-xs">
                      Php. {job.salary}{" "}
                      {job.jobpost_type != "Full Time"
                        ? "per hour"
                        : "per month"}
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

export default UserJobs;
