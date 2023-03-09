import React, { useEffect } from "react";
import useFetchApi from "../hooks/useFetchApi";
import SetUp from "../Setup";
import axios from "axios";
import { useState } from "react";

const EditProfile = () => {
  const [user, setUser] = useState([]);
  const [errorFile, setErrorFile] = useState(false);

  useEffect(() => {
    axios.get(`http://192.168.1.12:8000/users/18713261`).then(({ data }) => {
      setUser(data[0]);
      console.log(user);
      console.log("Render");
    });
  }, []);

  const handleSubmit = () => {};

  const handleFirstname = (e) => {
    setUser((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handlePhoneNumber = (e) => {
    setUser((prev) => {
      return { ...prev, file: e.target.value };
    });
  };

  const handleLastname = () => {};
  const handleAddress = () => {};
  const handleMobile = () => {};
  const handleEmail = () => {};
  const handleUsername = () => {};
  const handlePassword = () => {};
  const handleConfirm = () => {};
  const changeHandlerFile = () => {};
  const handleSubmission = () => {
    axios({
      method: "put",
      url: SetUp.SERVER_URL() + "/users",
      data: {
        password: "12345",
      },
    }).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  mt-[-10px] rounded-t-[20px]">
      <h1 className="p-5 text-xl font-bold tracking-wide">Edit Profile</h1>
      <div className="p-5">
        <form
          className="space-y-4 md:space-y-6 w-full"
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex gap-5">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First Name
              </label>
              <input
                type="text"
                onChange={handleFirstname}
                name="firstname"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-2.5 shadow-md bg-white outline-0"
                placeholder={user.firstname}
                required=""
              />
            </div>

            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                onChange={handleLastname}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  shadow-md  otuline-0 w-full p-2.5"
                placeholder={user.lastname}
                required=""
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="text"
              onChange={handleAddress}
              name="address"
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  outline-0 shadow-md w-full p-2.5"
              placeholder={user.address}
              required=""
            />
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mobile Number
            </label>
            <input
              type="number"
              onChange={handleMobile}
              name="mobilenumber"
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg otuline-0 shadow-md w-full p-2.5  "
              placeholder={user.mobileno}
              required=""
            />
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleEmail}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg   outline-0 shadow-md w-full p-2.5"
              placeholder={user.email}
              required=""
            />
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Change Profile
            </label>
            <div className="flex items-center justify-center w-full border">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PDF, PNG, JPG
                  </p>
                  <p
                    className=" text-blue-500 font-medium"
                    style={{ color: errorFile ? "red" : "" }}
                  >
                    {errorFile ? "File is too big" : user?.file?.name}
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden "
                  onChange={changeHandlerFile}
                />
              </label>
            </div>
          </div>
          <button
            onClick={handleSubmission}
            type="submit"
            className="w-full  text-white  bg-rose-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
