import React, { useEffect } from "react";
import useFetchApi from "../hooks/useFetchApi";
import SetUp from "../Setup";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Compressor from "compressorjs";
import useValidate from "../hooks/useValidate";

const nameValidate = (data) => /^[a-zA-Z]+(?:\s*[a-zA-Z]+)*$/.test(data);
const mobileValidation = (validationData) => /^09\d{9}$/.test(validationData);
const emailValidation = (validationData) =>
  /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(validationData);
const spaceValidation = (validationData) => /\S/.test(validationData);

const EditProfile = () => {
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);
  const [errorFile, setErrorFile] = useState(false);

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/users/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setUser(data[0]);
      });
  }, []);

  const {
    value: firstNameValue,
    isTouched: isTouchedFirstName,
    onChangeHandler: handleFirstname,
    onBlurHandler: blurFirstname,
    hasError: errorFirstname,
  } = useValidate(nameValidate);

  const {
    value: lastNameValue,
    isTouched: isTouchedLastName,
    onChangeHandler: handleLastname,
    onBlurHandler: blurLastname,
    hasError: errorLastname,
  } = useValidate(nameValidate);

  const {
    value: addressValue,
    isTouched: isTouchedAddress,
    onChangeHandler: handleAddress,
    onBlurHandler: blurAddress,
    hasError: errorAddress,
  } = useValidate(spaceValidation);

  const {
    value: mobileValue,
    isTouched: isTouchedMobile,
    onChangeHandler: handleMobile,
    onBlurHandler: blurMobile,
    hasError: errorMobile,
  } = useValidate(mobileValidation);

  const {
    value: emailValue,
    isTouched: isTouchedEmail,
    onChangeHandler: handleEmail,
    onBlurHandler: blurEmail,
    hasError: errorEmail,
  } = useValidate(emailValidation);

  // const handleFirstname = (e) => {
  //   setUser((prev) => {
  //     return { ...prev, firstname: e.target.value };
  //   });
  // };

  // const handleLastname = (e) => {
  //   setUser((prev) => {
  //     return { ...prev, lastname: e.target.value };
  //   });
  // };

  // const handleAddress = (e) => {
  //   setUser((prev) => {
  //     return { ...prev, address: e.target.value };
  //   });
  // };

  // const handleMobile = (e) => {
  //   setUser((prev) => {
  //     return { ...prev, mobileno: e.target.value };
  //   });
  // };
  // const handleEmail = (e) => {
  //   setUser((prev) => {
  //     return { ...prev, email: e.target.value };
  //   });
  // };
  const handleUsername = () => {};
  const handlePassword = () => {};
  const handleConfirm = () => {};

  const changeHandlerFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);

    if (e.target.files[0].size > 4 * 1024 * 1024) {
      setErrorFile(true);
    } else {
      setErrorFile(false);
    }
  };

  const handleSubmission = () => {
    let details = {
      ...user,
      firstname: firstNameValue === "" ? user.firstname : firstNameValue,
      lastname: lastNameValue === undefined ? user.lastname : lastNameValue,
      address: addressValue === undefined ? user.address : addressValue,
      mobileno: mobileValue === undefined ? user.mobileno : mobileValue,
      email: emailValue === undefined ? user.email : emailValue,
      img: file === null ? user.img : file,
    };

    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/edit-user",
      data: {
        ...details,
        userid: sessionStorage.getItem("userid"),
        file: file,
      },
      headers: { "Content-Type": '"multipart/form-data' },
    }).then(({ data }) => {
      if (data == 1) {
        window.location.href = "/dashboard";
      }
    });
  };

  const showError = (message) => {
    return <p className="text-sm text-red-600">Invalid {message}</p>;
  };

  let checkValid = false;
  if (
    !errorFirstname &&
    !errorLastname &&
    !errorAddress &&
    !errorMobile &&
    !errorEmail &&
    !errorFile
  ) {
    checkValid = true;
  }

  // console.log(!errorFirstname)
  // console.log(!errorLastname)
  // console.log(!errorAddress)
  // console.log(!errorMobile)
  // console.log(!errorEmail)
  // console.log(!errorFile)
  // console.log(checkValid)

  console.log(errorFirstname);
  // console.log(isTouchedFirstName)
  // console.log(firstNameValue)

  console.log(errorEmail);
  // console.log(isTouchedEmail)
  // console.log(emailValue)

  return (
    <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  mt-[-10px] rounded-t-[20px]">
      <Header />
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
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First Name
              </label>
              <input
                type="text"
                onChange={handleFirstname}
                name="firstname"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-2.5 shadow-md bg-white outline-0"
                value={
                  firstNameValue === undefined ? user.firstname : firstNameValue
                }
                onBlur={blurFirstname}
                required=""
              />
              {errorFirstname && isTouchedFirstName && showError("first name")}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                onChange={handleLastname}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  shadow-md  otuline-0 w-full p-2.5"
                value={
                  lastNameValue === undefined ? user.lastname : lastNameValue
                }
                onBlur={blurLastname}
                required=""
              />
              {errorLastname && isTouchedLastName && showError("last name")}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="text"
              onChange={handleAddress}
              name="address"
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  outline-0 shadow-md w-full p-2.5"
              value={addressValue === undefined ? user.address : addressValue}
              onBlur={blurAddress}
              required=""
            />
            {errorAddress && isTouchedAddress && showError("address")}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mobile Number
            </label>
            <input
              type="number"
              onChange={handleMobile}
              name="mobilenumber"
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg otuline-0 shadow-md w-full p-2.5  "
              value={mobileValue === undefined ? user.mobileno : mobileValue}
              onBlur={blurMobile}
              required=""
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleEmail}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg   outline-0 shadow-md w-full p-2.5"
              value={emailValue === undefined ? user.email : emailValue}
              onBlur={blurEmail}
              required=""
            />{" "}
            {errorEmail && isTouchedEmail && showError("email")}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Change Profile
            </label>
            <div className="flex items-center justify-center w-full border">
              <label
                htmlFor="dropzone-file"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                    {errorFile ? "File is too big" : file?.name}
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
            // className="w-full  text-white  bg-rose-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            className={`w-full text-white ${
              checkValid ? `bg-gray-500` : `bg-rose-400`
            } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            disabled={checkValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
