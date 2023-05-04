import React, { useEffect, useState } from "react";
import SetUp from "../Setup";
import axios from "axios";
import Modal from "./Modal";
import Header from "./Header";

const Resume = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const [resume, setResume] = useState({
    category: "",
    work_experience: "",
    application_letter: "",
  });
  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/resume/${props.id}`).then(({ data }) => {
      setResume(data[0]);
    });
  }, [success]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setResume((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submit = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: SetUp.SERVER_URL() + "/resume/" + resume.resume_id,
      data: resume,
    }).then((data) => {
      setSuccess(!success);
      setShowModal(false);
    });
  };

  const deleteResume = () => {
    axios({
      method: "delete",
      url: SetUp.SERVER_URL() + "/resume/" + resume.resume_id,
    }).then((data) => {
      setSuccess(!success);
    });
  };

  return (
    <div className="w-full flex p-6 flex-col gap-5">
     
      <div
        className="fixed top-0 left-0 w-[100%]  h-screen py-20 z-100 bg-white"
        style={{ display: showModal ? "block" : "none" }}
      >
        
        <div className="p-5">
        
          <h1 className="p-5 text-xl font-bold tracking-wide">Update Resume</h1>
          <form
            className="space-y-4 md:space-y-6 w-full"
            //   method="post"
            onSubmit={submit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Category
              </label>
              <input
                type="text"
                onChange={onChangeHandler}
                name="category"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  outline-0 shadow-md w-full p-2.5"
                defaultValue={resume?.category}
                required=""
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Work Experience
              </label>
              <input
                type="text"
                onChange={onChangeHandler}
                name="work_experience"
                defaultValue={resume?.work_experience}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg otuline-0 shadow-md w-full p-2.5  "
                //   placeholder={user.mobileno}
                required=""
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Application Summary
              </label>

              <textarea
                name="application_letter"
                onChange={onChangeHandler}
                defaultValue={resume?.application_letter}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  outline-0 shadow-md w-full p-2.5"
                rows="5"
              />
            </div>

            <button
              // onClick={handleSubmission}
              type="submit"
              className="w-full  text-white  bg-rose-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <button
              // onClick={handleSubmission}
              type="submit"
              className="w-full  text-rose-400  bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 p-5 items-center border border-gray-300 rounded-xl shadow-xl">
        <div className="flex flex-col gap-5 items-center  justify-between w-[80%]">
          <label className="text-lg  justify-between text-rose-500">Category:</label>
          <p className="text-sm">{resume?.category}</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-between w-[80%]">
          <label className="text-lg  text-rose-500 ">Work Experience: </label>
          <p className="text-sm">{resume?.work_experience}</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-between  w-[80%]">
          <label className="text-lg text-rose-500">Application Letter:</label>
          <p className="text-sm">{resume?.application_letter}</p>
        </div>
      </div>
      {sessionStorage.getItem("userid") == resume?.babysitter_id ? (
        <div className="flex w-full justify-center gap-3">
          <button
            className="px-5 py-2 rounded-full bg-rose-400 text-white shadow-xl"
            onClick={() => {
              setShowModal(true);
              props.set;
            }}
          >
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            className="px-5 py-2 rounded-full bg-rose-400 text-white shadow-xl"
            onClick={deleteResume}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Resume;
