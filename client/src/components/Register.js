import React, { useEffect, useState } from "react";
import axios from "axios";
import SetUp from "../Setup";
import Compressor from "compressorjs";
import useValidate from "../hooks/useValidate";

const nameValidate = (data) => /^[a-zA-Z]+(?:\s*[a-zA-Z]+)*$/.test(data);
const mobileValidation = (validationData) => /^09\d{9}$/.test(validationData);
const emailValidation = (validationData) =>
  /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(validationData);
const usernameValidation = (validationData) =>
  /^[a-zA-Z0-9_]{4,16}$/.test(validationData);
const passwordValidation = (validationData) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/.test(
    validationData
  );
const spaceValidation = (validationData) => /\S/.test(validationData);
const ageValidate = (age) => (age >= 18 ? true : false);

const Register = () => {
  const [user, setUser] = useState({});
  const [file, setFile] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [errorFile, setErrorFile] = useState(false);

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
    value: ageValue,
    isTouched: isTouchedAge,
    onChangeHandler: handleAge,
    onBlurHandler: blurAge,
    hasError: errorAge,
  } = useValidate(ageValidate);

  const {
    value: addressValue,
    isTouched: isTouchedAddress,
    onChangeHandler: handleAddress,
    onBlurHandler: blurAddress,
    hasError: errorAddress,
  } = useValidate(spaceValidation);

  const {
    value: telNoValue,
    isTouched: isTouchedTelNo,
    onChangeHandler: handleTelNo,
    onBlurHandler: blurTelNo,
    hasError: errorTelNo,
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

  const {
    value: usernameValue,
    isTouched: isTouchedUsername,
    onChangeHandler: handleUsername,
    onBlurHandler: blurUsername,
    hasError: errorUsername,
  } = useValidate(usernameValidation);

  const {
    value: passwordValue,
    isTouched: isTouchedPassword,
    onChangeHandler: handlePassword,
    onBlurHandler: blurPassword,
    hasError: errorPassword,
  } = useValidate(passwordValidation);

  const {
    value: confirmValue,
    isTouched: isTouchedConfirm,
    onChangeHandler: handleConfirm,
    onBlurHandler: blurConfirm,
    // hasError: errorConfirm,
  } = useValidate(passwordValidation);

  const matchPassword = () => {
    return passwordValue === confirmValue ? true : false;
  };

  const changeHandlerFile = (e) => {
    const file = e.target.files[0];

    setUser((prev) => {
      return { ...prev, file: file };
    });

    if (e.target.files[0].size > 4 * 1024 * 1024) {
      console.log("mb is more than 4");
      setErrorFile(true);
    } else {
      console.log("mb is less than 4");
      setErrorFile(false);
    }
  };

  const handleType = (e) => {
    setUser((prev) => {
      return { ...prev, type: e.target.value };
    });
  };

  const handleCheckbox = (e) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmission = (e) => {
    let details = {
      firstname: firstNameValue,
      lastname: lastNameValue,
      address: addressValue,
      age: ageValue,
      mobileno: mobileValue,
      telno: telNoValue,
      email: emailValue,
      username: usernameValue,
      password: passwordValue,
    };

    new Compressor(user?.file, {
      quality: 0.6,
      success(result) {
        axios({
          method: "POST",
          url: SetUp.SERVER_URL() + "/users",
          data: {
            ...user,
            ...details,
            file: result,
            status: "pending",
            deleted: 0,
          },
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((data) => {
            console.log(data);
            window.location.href = "/login";
          })
          .catch((err) => {
            console.log(user);
            console.log(err);
          });
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  const showError = (message) => {
    return <p className="text-sm text-red-600">Invalid {message}</p>;
  };

  let checkValid = true;
  if (
    !errorFirstname &&
    !errorLastname &&
    !errorAge &&
    !errorAddress &&
    !errorTelNo &&
    !errorMobile &&
    !errorEmail &&
    !errorUsername &&
    !errorPassword &&
    matchPassword() &&
    !errorFile &&
    user.type &&
    isChecked
  ) {
    checkValid = false;
  }

  return (
    <section className="">
      <div className="flex flex-col items-center   lg:py-0 ">
        <div className="p-6 z-1 rounded-header overflow-hidden bg-rose-400">
          <div
            className=" h-[5rem] flex  items-center"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            <i className="fa-solid fa-arrow-left  text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold md:text-2xl tracking-wide">
            Create new account
          </h1>
        </div>
        <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  mt-[-10px] rounded-t-[20px]">
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
                    onBlur={blurFirstname}
                    required=""
                  />
                  {errorFirstname &&
                    isTouchedFirstName &&
                    showError("first name")}
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
                    onBlur={blurLastname}
                    required=""
                  />
                  {errorLastname && isTouchedLastName && showError("last name")}
                </div>
              </div>

              <div>
                <label
                  for="age"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Age
                </label>
                <input
                  type="number"
                  onChange={handleAge}
                  name="age"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg  outline-0 shadow-md w-full p-2.5"
                  placeholder="18"
                  onBlur={blurAge}
                  required=""
                />
                {errorAge &&
                  isTouchedAge &&
                  showError("age (Age must be 18 years old and above)")}
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
                  onBlur={blurAddress}
                  required=""
                />
                {errorAddress && isTouchedAddress && showError("address")}
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Telephone Number
                </label>
                <input
                  type="number"
                  onChange={handleTelNo}
                  name="telno"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg otuline-0 shadow-md w-full p-2.5  "
                  placeholder="+639XXXXXX"
                  onBlur={blurTelNo}
                  required=""
                />
                {errorTelNo && isTouchedTelNo && showError("telephone number")}
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
                  name="mobileno"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg otuline-0 shadow-md w-full p-2.5  "
                  placeholder="+639XXXXXX"
                  onBlur={blurMobile}
                  required=""
                />
                {errorMobile && isTouchedMobile && showError("mobile number")}
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
                  onBlur={blurEmail}
                  required=""
                />
                {errorEmail && isTouchedEmail && showError("email")}
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
                  onBlur={blurUsername}
                  required=""
                />
                {errorUsername && isTouchedUsername && showError("username")}
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
                  onBlur={blurPassword}
                  required=""
                />
                {errorPassword &&
                  isTouchedPassword &&
                  showError(
                    "password (Atleast 8 characters and contain an Uppercase letter, Lowercase letter , numbers and one special character )"
                  )}
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
                  name="confirmpass"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm outline-0 rounded-lg  shadow-md  w-full p-2.5"
                  onBlur={blurConfirm}
                  required=""
                />
                {isTouchedConfirm &&
                  !matchPassword() &&
                  showError("password (Password did not match)")}
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Upload Profile
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

              <div className="flex">
                <p className="font-md mr-3">Type</p>
                {!user.type && (
                  <p className="text-md text-red-600">
                    {" "}
                    Please choose user type
                  </p>
                )}
              </div>

              <main className="flex w-full items-center justify-center">
                <div
                  className="flex w-full  rounded-xl justify-between bg-gray-300 p-3"
                  x-data="app"
                >
                  <div>
                    <input
                      type="radio"
                      onChange={handleType}
                      value="parent"
                      name="option"
                      id="1"
                      className="peer hidden"
                    />
                    <label
                      for="1"
                      className="flex cursor-pointer select-none rounded-xl p-3 px-10 text-center peer-checked:bg-rose-400 peer-checked:font-bold peer-checked:text-white"
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
                      className="peer hidden"
                    />
                    <label
                      for="4"
                      className="flex cursor-pointer select-none rounded-xl text-center p-3 px-10 peer-checked:bg-rose-400 peer-checked:font-bold peer-checked:text-white mr-5"
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
                    checked={isChecked}
                    onChange={handleCheckbox}
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
                className={`w-full text-white ${
                  checkValid ? `bg-gray-500` : `bg-rose-400`
                } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                disabled={checkValid}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-600 text-center">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline text-blue-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
