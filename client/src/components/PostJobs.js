import React, { useEffect, useState } from "react";
import axios from "axios";
import SetUp from "../Setup";
const PostJobs = () => {
  const [user, setUser] = useState({});

  const [file, setFile] = useState({});
  const [errorFile, setErrorFile] = useState(false);

  const handleFirstname = (e) => {
    setUser((prev) => {
      return { ...prev, firstname: e.target.value };
    });
  };

  const handleLastname = (e) => {
    setUser((prev) => {
      return { ...prev, lastname: e.target.value };
    });
  };

  const handleAddress = (e) => {
    setUser((prev) => {
      return { ...prev, address: e.target.value };
    });
  };

  const handleMobile = (e) => {
    setUser((prev) => {
      return { ...prev, mobileno: e.target.value };
    });
  };

  const handleEmail = (e) => {
    setUser((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const handleUsername = (e) => {
    setUser((prev) => {
      return { ...prev, username: e.target.value };
    });
  };

  const handlePassword = (e) => {
    setUser((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleConfirm = (e) => {
    setUser((prev) => {
      return { ...prev, confirmpass: e.target.value };
    });
  };

  const changeHandlerFile = (e) => {
    e.preventDefault();

    setUser((prev) => {
      return { ...prev, file: e.target.files[0] };
    });

    if (e.target.files[0].size > 4 * 1024 * 1024) {
      setErrorFile(true);
    } else {
      setErrorFile(false);
    }
  };

  const handleType = (e) => {
    setUser((prev) => {
      return { ...prev, type: e.target.value };
    });
  };

  const handleSubmission = (e) => {
    const fd = new FormData();

    fd.append("img", user.file);

    axios({
      method: "POST",
      url: SetUp.SERVER_URL() + "/users",
      data: { ...user, status: "active", filename: user.file.name },
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((data) => {
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(user);
        console.log(err);
      });
  };

  return (
    <section className="">
      <div className="flex flex-col items-center   lg:py-0 ">
        <div className="p-6 z-1 rounded-header overflow-hidden bg-rose-400">
          <div className=" h-[5rem] flex  items-center">
            <i class="fa-solid fa-arrow-left  text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold md:text-2xl tracking-wide">
            Create new account
          </h1>
        </div>
        <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  mt-[-10px] rounded-t-[20px] ">
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
                    placeholder="First Name"
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
                    placeholder="Last Name"
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
                  placeholder="Address"
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
                  placeholder="+639XXXXXX"
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
                  placeholder="your@email.com"
                  required=""
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleUsername}
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-0 shadow-md w-full p-2.5"
                  placeholder="your@email.com"
                  required=""
                />
              </div>

              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={handlePassword}
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  outline-0 shadow-md rounded-lg w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  onChange={handleConfirm}
                  name="confirm-password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm outline-0 rounded-lg  shadow-md  w-full p-2.5"
                  required=""
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Upload Valid ID
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
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

              <p className="font-md">Type</p>

              <main class="flex w-full items-center justify-center">
                <div
                  class="flex w-full  rounded-xl justify-between bg-gray-300 p-3"
                  x-data="app"
                >
                  <div>
                    <input
                      type="radio"
                      onChange={handleType}
                      value="parent"
                      name="option"
                      id="1"
                      class="peer hidden"
                    />
                    <label
                      for="1"
                      class="flex cursor-pointer select-none rounded-xl p-3 px-10 text-center peer-checked:bg-rose-400 peer-checked:font-bold peer-checked:text-white"
                    >
                      Parents
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="option"
                      onChange={handleType}
                      value="babysitter"
                      id="4"
                      class="peer hidden"
                    />
                    <label
                      for="4"
                      class="flex cursor-pointer select-none rounded-xl text-center p-3 px-10 peer-checked:bg-rose-400 peer-checked:font-bold peer-checked:text-white mr-5"
                    >
                      Babysitter
                    </label>
                  </div>
                </div>
              </main>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="terms" className="font-light text-gray-600 ">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
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
      </div>
    </section>
  );
};

export default PostJobs;
