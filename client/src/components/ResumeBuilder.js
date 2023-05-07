import axios from "axios";
import React, { useState } from "react";
import SetUp from "../Setup";
import Header from "./Header";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setResumeData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(resumeData);
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/resume",
      data: { ...resumeData, babysitter_id: sessionStorage.getItem("userid") },
    }).then(({ data }) => {
      console.log(data);
      window.location.href = `/user-details?userid=${sessionStorage.getItem(
        "userid"
      )}`;
    });
  };

  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="p-5 text-xl font-bold tracking-wide">Build Resume</h1>
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
              //   placeholder={user.address}
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
            {/* <input
              type="text"
              name="email"
              onChange={handleEmail}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg   outline-0 shadow-md w-full p-2.5"
              placeholder={user.email}
              required=""
            /> */}
            <textarea
              name="application_letter"
              onChange={onChangeHandler}
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
        </form>
      </div>
    </>
  );
};

export default ResumeBuilder;
